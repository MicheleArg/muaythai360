import { Component, OnInit } from '@angular/core';
import { EventsService} from '../service/events.service';
import Event from 'src/app/models/Event';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  single = "Single";
  double = "Double";
  event: Event = new Event();
  submitted = false;
  events: any;

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.event.title = 'test1';
    this.event.description = 'test1';
    this.event.immagine = 'test1';
    this.retrieveTutorials()
  }

  retrieveTutorials(): void {
    this.eventService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.events = data;
      console.log('#data ----> ');
      console.log(data);
    });
  }
}
