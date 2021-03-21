import { Component, OnInit, Input } from '@angular/core';
import { StatBar } from '../interfaces/about-me';

@Component({
  selector: 'app-statbar',
  templateUrl: './statbar.component.html',
  styleUrls: ['./statbar.component.scss']
})
export class StatbarComponent implements OnInit {
  @Input() statbar: StatBar;
  displayPercent = 0;

  constructor() { }

  ngOnInit(): void {
    requestAnimationFrame(()=>{
      this.displayPercent = this.statbar.percent;
    })
  }

  getStatbarPercent() {
    return this.displayPercent + '%';
  }
}
