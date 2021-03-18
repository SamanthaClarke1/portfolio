import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ProjectComponent } from './project/project.component';
import { PastProjectsComponent } from './past-projects/past-projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { KeyPointComponent } from './key-point/key-point.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { StatbarComponent } from './statbar/statbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProjectComponent,
    PastProjectsComponent,
    AboutMeComponent,
    KeyPointComponent,
    ContactMeComponent,
    FooterComponent,
    StatbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
