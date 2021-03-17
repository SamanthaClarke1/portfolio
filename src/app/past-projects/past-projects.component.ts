import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.scss', '../content/content-section.scss']
})
export class PastProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 0,
      images: ["/assets/images/articdes2.png", "/assets/images/code1.png", "/assets/images/artic.png"],
      title: "Fartic",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in massa sed metus facilisis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget enim id diam blandit luctus a et ante. Sed non justo id nulla pellentesque semper vitae in tellus. Praesent tempor posuere ligula, nec maximus turpis rhoncus in. Maecenas in sem ante."
    },
    {
      id: 1,
      images: ["/assets/images/articdes1.png", "/assets/images/articdes1.png", "/assets/images/articdes2.png"],
      title: "Artic",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in massa sed metus facilisis gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eget enim id diam blandit luctus a et ante. Sed non justo id nulla pellentesque semper vitae in tellus. Praesent tempor posuere ligula, nec maximus turpis rhoncus in. Maecenas in sem ante."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
