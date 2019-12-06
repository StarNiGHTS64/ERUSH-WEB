import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GamingInterface } from '../models/gaming';
import { EventInterface } from '../models/event';
import { UserInterface } from '../models/user';
import { Observable } from 'rxjs/internal/Observable'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs:AngularFirestore) {
    this.gamingsCollection = afs.collection<GamingInterface>('gaming');
    this.gamings = this.gamingsCollection.valueChanges();

    this.eventsCollection = afs.collection<EventInterface>('event');
    this.events = this.eventsCollection.valueChanges();
   }
  //---------------------------------GAMING---------------------//
  private gamingsCollection: AngularFirestoreCollection<GamingInterface>;
  private gamings: Observable<GamingInterface[]>
  getAllGamings(){
    return this.gamings = this.gamingsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as GamingInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  addGaming(){}
  updateGaming(){}
  deleteGaming(){}

  //---------------------------------EVENT----------------------//
  private eventsCollection: AngularFirestoreCollection<EventInterface>;
  private events: Observable<EventInterface[]>
  getAllEvents(){
    return this.events = this.eventsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as EventInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  addEvent(){}
  updateEvent(){}
  deleteEvent(){}

  //---------------------------------USER----------------------//
  private gamersCollection: AngularFirestoreCollection<UserInterface>;
  private gamers: Observable<UserInterface[]>
  getAllUsers(){}
  addUser(){}
  updateUser(){}
  deleteUser(){}

}
