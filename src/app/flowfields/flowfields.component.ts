import { Component, OnInit, HostListener } from '@angular/core';
import * as p5 from 'p5';
import * as SimplexNoise from './simplexnoise';

@Component({
  selector: 'app-flowfields',
  templateUrl: './flowfields.component.html',
  styleUrls: ['./flowfields.component.scss']
})
export class FlowfieldsComponent implements OnInit {
  particles = [];
  n_ = new SimplexNoise();
  fMult = 0;
  ALPHA = 8; // note: due to what i think is a color rounding error,
  // there can be "staining" of the bg if the alpha is too low. sometimes if its too high.
  // its sensitive, and the numbers are magic. hence why i suggest mostly
  // just changing the opacity interval, instead.
  OPACITY_INTERVAL = 6;
  BASE_COLOR = [51,51,51];
  HAS_BACKGROUND = false;
  cnv;
  opts;

  constructor() {
    this.opts = this.generateOpts();
  }

  generateOpts(twidth=innerWidth) {
    return {
      _time: Math.floor(Math.random() * 9999), //
      _ps: 4.5 + (twidth / 700), // _ps = _particlesize
      _pa: 100, // _pa = _particlealpha
      _speed: 0.6 + (twidth / 3000),
      _vellines: false, // adds lines indicating velocity
      _genamt: 80, // how many particles there are
      _timecontinuity: false, // whether the noise progresses in 2 dimensions or 3 (time)
      _wrapping: true, // whether particles that hit the boundaries will 'respawn' or simulate forever
      _accmang: true, // whether particles angles accumulate based on noise or are decided by it
      _curlnoise: true, // whether particles use curl noise instead of simplex.
      _step: 85, // frequency of the noise function.
      _radiusOut: 10 + (Math.min(twidth, 1000) / 6.66),
      _timeprog: 0.4, // if there is time continuity, how fast does the flowfield change?
    }
  }

  rtime;
  timeout = false;
  delta = 100;

  @HostListener('window:resize', ['$event'])
  onResize(event) { // queue up timeout
    this.rtime = new Date().getTime();
    if (this.timeout === false) {
      this.timeout = true;
      setTimeout(this.resizeEnd(this, event), this.delta);
    }
  }
  resizeEnd(me, event) {
    return function() {
      // check if they're done resizing the window (for performance reasons)
      if(new Date().getTime() - me.rtime < me.delta) {
        setTimeout(me.resizeEnd(me, event), me.delta);
      } else {
        // if enough time has passed, run our code.
        me.timeout = false;
  
        me.opts = me.generateOpts(window.innerWidth);
        for(let i = 0; i < me.particles.length; i++) {
          me.particles[i].opts = me.opts;
          me.particles[i].goToRandomPosition();
        }
      }
    }
  }

  ngOnInit(): void {
    const sketch = (s) => {
      s.windowResized = () => {
        s.clear();
        s.resizeCanvas(innerWidth, innerHeight);
      }
      s.setup = () => {
        this.cnv = s.createCanvas(innerWidth, innerHeight);
        this.cnv.parent(document.getElementById("flowfields-world"));

        if(this.HAS_BACKGROUND) {
          s.background(
            this.BASE_COLOR[0], 
            this.BASE_COLOR[1], 
            this.BASE_COLOR[2]
          );
        }
        
        for(let i = 0; i < this.opts._genamt; i++) {
          this.particles.push(new Particle(s, this.n_, this.opts));
        }
        
        s.noStroke();
      }
      s.draw = () => {
        if(this.fMult >= this.OPACITY_INTERVAL) {
          this.fMult = 0;
          if(this.HAS_BACKGROUND) {
            s.background(
              this.BASE_COLOR[0], 
              this.BASE_COLOR[1], 
              this.BASE_COLOR[2], 
              this.ALPHA
            );
          }
        }
        this.fMult += 1;
        
        for(let i = 0; i < this.particles.length; i++) {
          this.particles[i].move();
          this.particles[i].draw(s);
        }
        
        if(this.opts._timecontinuity) this.opts._time += this.opts._timeprog;
      }
    }

    this.cnv = new p5(sketch)
  }
}
function Particle(s, n_, opts) {
  this.opts = opts;

  this.move = function() {
    let etime = this.opts._time / (this.opts._step*10);
    if(this.opts._curlnoise == false) {
      this.nang = s.map(
        n_.noise3D(this.x / this.opts._step, this.y / this.opts._step, etime), 0, 1, 0, s.TWO_PI
      );
      this.ang = (this.ang * 15 + this.nang * 85) / 200;
    
      this.x +=  Math.sin(this.ang) * this.opts._speed;
      this.y += -Math.cos(this.ang) * this.opts._speed;
    } else {
      let curl = computeCurl(n_,
        this.x / (this.opts._step * 2), 
        this.y / (this.opts._step * 2), 
        etime
      );
      this.x += curl[0] * this.opts._speed / 4;
      this.y += curl[1] * this.opts._speed / 4;
    }
      
    if(this.opts._wrapping) {
      if(this.x > s.width || this.x < 0 || this.y > s.height || this.y < 0) {
        this.goToRandomPosition();
      }
    }
    
    if(this.opts._vellines) {
      this.nx = this.x +  Math.sin(this.ang) * this.opts._speed * 10;
      this.ny = this.y + -Math.cos(this.ang) * this.opts._speed * 10;
    }
  }

  this.goToRandomPosition = function() {
    // profile is slightly closer to the top
    let centerPoint = [s.width/2, s.height/2 - 50]; 
    let radiOut = this.opts._radiusOut - s.random(0, this.opts._radiusOut/3);
    let rang = s.random(0, s.TWO_PI);

    this.x = centerPoint[0] + Math.sin(rang) * radiOut;
    this.y = centerPoint[1] - Math.cos(rang) * radiOut;
    this.color = getRandomColor(s);
    this.ang = s.random(0, s.TWO_PI);
  }
  
  this.draw = function() {
    s.fill(this.color[0], this.color[1], this.color[2], this.opts._pa);
    
    if(this.opts._vellines) {
      s.stroke(this.color[0], this.color[1], this.color[2], this.opts._pa);
      s.line(this.x, this.y, this.nx, this.ny);
    }
    
    s.ellipse(this.x,  this.y, this.opts._ps, this.opts._ps);
  }

  this.goToRandomPosition();
}
function rollInd(i){
  if(i < 0) return i + 3;
  if(i > 3) return i - 3;
  return i;
}
function getRandomColor(s) {
  let rcol = [s.random(225, 75), s.random(225, 75), s.random(225, 75)];
  
  let target = 0; // simple saturation/contrast increaser. side effect means that r/g/b colors are more incentivised.
  if(s.random(0, 3) > 2) target = 2;
  else if(s.random(0, 3) > 1) target = 1;
  rcol[target] += (rcol[target] - rcol[rollInd(target-1)]) / 4;
  let target2 = rollInd(target-2);
  rcol[target2] -= (rcol[target2]) / 8;
  
  return rcol;
}
function computeCurl(n_, x, y, et){
	var eps = 0.001;
	var n1 = n_.noise3D(x, y + eps, et/2.5); 
	var n2 = n_.noise3D(x, y - eps, et/2.5); 
	var a = (n1 - n2)/(2 * eps);

	var n1 = n_.noise3D(x + eps, y, et/2.5);
	var n2 = n_.noise3D(x - eps, y, et/2.5); 
	var b = (n1 - n2)/(2 * eps);

	return [a, -b];
}