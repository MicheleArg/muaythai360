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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsService} from './service/events.service';
import { ArticoloService} from './service/articolo.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { ArticoliComponent } from './articoli/articoli.component';
import { SingleArticoloComponent } from './single-articolo/single-articolo.component';

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
    SingleEventComponent,
    ArticoliComponent,
    SingleArticoloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // for firestore
  ],
  providers: [
    EventsService,
    ArticoloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
