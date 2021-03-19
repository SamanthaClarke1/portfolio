import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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

import { AngularFireModule } from '@angular/fire'
import { AngularFireFunctionsModule, USE_EMULATOR } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from '../environments/environment'


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
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule
  ],
  providers: [
    { provide: USE_EMULATOR, useValue: ['localhost', 5000] }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
