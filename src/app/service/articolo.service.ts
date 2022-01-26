import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Event from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {

  private dbPath = '/articoli';

  eventRef: AngularFirestoreCollection<Event>;

  constructor(private db: AngularFirestore) {
    this.eventRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Event> {
    return this.eventRef;
  }

  create(event: Event): any {
    return this.eventRef.add({ ...event });
  }

  update(id: string, data: any): Promise<void> {
    return this.eventRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.eventRef.doc(id).delete();
  }
}
