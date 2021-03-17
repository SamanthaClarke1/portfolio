import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdbModule } from 'mdb-angular-ui-kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
