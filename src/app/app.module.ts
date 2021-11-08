import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { CorsiComponent } from './corsi/corsi.component';
import { BoComponent } from './bo/bo.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { SingleEventComponent } from './single-event/single-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    ToolbarComponent,
    AboutComponent,
    TeamComponent,
    CorsiComponent,
    BoComponent,
    GalleriaComponent,
    LocationComponent,
    FooterComponent,
    SingleEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
