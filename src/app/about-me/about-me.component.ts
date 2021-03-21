import { Component, OnInit } from '@angular/core';
import { KeyPoint, StatBar } from '../interfaces/about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../content/content-section.scss']
})
export class AboutMeComponent implements OnInit {

  keypoints: Array<KeyPoint> = [
    {icon: "fa-tachometer-alt", title: "Fast", blurb: "There's nothing good about making a user wait"},
    {icon: "fa-lightbulb", title: "Intuitive", blurb: "A good 10-page manual is still a 10-page manual"},
    {icon: "fa-broom", title: "Clean", blurb: "Messy designs are ugly, and hard to maintain"},
    {icon: "fa-user-astronaut", title: "Dynamic", blurb: "It's a new age- websites don't have to be stone tablets anymore"}
  ]

  stats: Array<StatBar> = [
    {icon: "fab fa-html5", color: "deep-orange", title: "HTML5", percent: 90},
    {icon: "fab fa-js-square", color: "amber", title: "JavaScript", percent: 90},
    {icon: "fab fa-css3-alt", color: "blue", title: "CSS3", percent: 80},
    {icon: "fab fa-figma", color: "", title: "Figma", percent: 65},
    {icon: "fab fa-python", color: "indigo", title: "Python", percent: 60},
    {icon: "fab fa-angular", color: "red", title: "Angular", percent: 50},
    {icon: "fab fa-google", color: "orange", title: "Firebase", percent: 40}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
