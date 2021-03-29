import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.scss', '../content/content-section.scss']
})
export class PastProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 0,
      images: ["/assets/images/artic5.png", "/assets/images/artic.png", "/assets/images/articdes2.png"],
      title: "Artic",
      status: "Ended Mar, 2021",
      blurb: 
`
  Developed by TechistAU, Artic was a project designed to allow the easy tracking, and management
  of shipping containers. This was accomplished through a robust front-end web interface, with multiple
  modules, designed according to Material Design principles.

  I was originally brought on as a Front-End Developer only, however, my talent was quickly recognised in such
  a small team, and I also worked to train other developers, and work with management on the design of the site.
`
    },
    {
      id: 1,
      images: ["/assets/images/portfolio-aboutme.png", "/assets/images/displays.png", "/assets/images/portfolio-footer.png"],
      status: "Completed Mar, 2021",
      title: "Portfolio",
      blurb: 
`
  "Portfolio" is a short personal project (the one you're currently looking at!),
  made over the course of around a week, from design, to writing, to asset sourcing, to coding, to completion.

  It is made in Angular, with all code hosted on Firebase, 
  for both the front end, and back end functionality.

  I worked on it alone, and it's completely open source, hosted on my personal Github.
`
    },
    {
      id: 2,
      images: ["/assets/images/brimm2.png", "/assets/images/brimm1.png", "/assets/images/brimm3.png"],
      status: "Ended Aug, 2020",
      title: "Brimm",
      blurb: 
`
  Brimm was an action-adventure game, think "Earthbound", but in realtime!

  It was a personal project, which I developed personally, on my own.
  It was developed in godot, using GDScript (modified python) as the main scripting language.

  I worked on it as a side-project, with the hopes of releasing it later on steam, and itch.io.
  However, as passion faded later, and life called me to new projects,
  I ended up moving on for brighter pastures.
`
    },
    {
      id: 3,
      images: ["/assets/images/neutronic1.png", "/assets/images/neutronic2.png", "/assets/images/neutronicui.png"],
      status: "Completed Mar, 2019",
      title: "Neutronic",
      blurb: 
`
  Neutronic was a multiplayer ".io" game that I worked on to practice my Socket and Node skills;
  written using HTML, CSS, JS, Socket, Express, and Node.

  The main idea was essentially a multiplayer asteroids-type shoot-em-up, 
  where no one actually directly shoots anyone else.
  Instead, you shot black holes, that, after a second, 
  pulled everyone around them into their maw -- including you!

  It's now hosted on my github, under the name ships.io.
`
    },
    {
      id: 4,
      images: ["/assets/images/Timesheets.png", "/assets/images/Timesheets2.png", "/assets/images/Timesheets3.png"],
      status: "Completed Dec, 2018",
      title: "Cumulus Timesheets",
      blurb: 
`
  Cumulus Timesheets was a system created to allow management to monitor what their artists were spending their time on.

  It allowed artists to create & submit timesheets,
  and it even automagically filled out timesheets for them!
  It also allowed admins to track what, where, and when users were working on projects, 
  through the usage of some very neat graphing utilities.

  I was the sole developer, from start to finish, and worked with management on the design of the site.
`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
