import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Corso from '../models/Corso';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  private dbPath = '/corso';

  corsoRef: AngularFirestoreCollection<Corso>;

  constructor(private db: AngularFirestore) {
    this.corsoRef = db.collection(this.dbPath);
  }

  get(id: string): any {
    return this.db.collection<Corso>('corsi')
               .doc(id)
               .ref
               .get()
               .then((doc) => {
                   if (doc.exists) {
                       console.log(doc.data());
                       return doc.data();
                   } else {
                       return 'Doc does not exits';
                   }
                })
                .catch((err) => {
                   console.error(err);
                });
    }

  create(corso: Corso): any {
    return this.corsoRef.add({ ...corso });
  }

  update(id: string, data: any): Promise<void> {
    return this.corsoRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.corsoRef.doc(id).delete();
  }
}
