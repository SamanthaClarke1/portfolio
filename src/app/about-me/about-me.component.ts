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
    {icon: "fa-save", color: "teal", title: "Saving", percent: 80},
    {icon: "fa-trash", color: "red", title: "Deleting", percent: 20},
    {icon: "fa-edit", color: "green", title: "Editing", percent: 40},
    {icon: "fa-magic", color: "purple", title: "Magic", percent: 75},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
