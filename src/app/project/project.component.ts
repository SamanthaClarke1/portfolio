import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss', '../content/content-section.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project?: Project;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
