import { Component, OnInit, Input } from '@angular/core';
import { KeyPoint } from '../interfaces/about-me';

@Component({
  selector: 'app-key-point',
  templateUrl: './key-point.component.html',
  styleUrls: ['./key-point.component.scss', '../content/content-section.scss']
})
export class KeyPointComponent implements OnInit {
  @Input() keypoint: KeyPoint;

  constructor() { }

  ngOnInit(): void {
  }

}
