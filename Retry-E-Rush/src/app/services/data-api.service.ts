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
  private gamingDoc: AngularFirestoreDocument<GamingInterface>;
  private gaming: Observable<GamingInterface>;
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
  getOneGaming(idGaming: string){
    this.gamingDoc = this.afs.doc<GamingInterface>(`gaming/${idGaming}`);
    return this.gaming = this.gamingDoc.snapshotChanges().pipe(map(action =>{
      if (action.payload.exists == false){
        return null;
      }else {
        const data = action.payload.data() as GamingInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addGaming(){}
  updateGaming(){}
  deleteGaming(){}

  //---------------------------------EVENT----------------------//
  private eventsCollection: AngularFirestoreCollection<EventInterface>;
  private events: Observable<EventInterface[]>
  private eventDoc: AngularFirestoreDocument<EventInterface>;
  private event: Observable<EventInterface>
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
  getOneEvent(idEvent: string){
    this.gamingDoc = this.afs.doc<EventInterface>(`event/${idEvent}`);
    return this.event = this.eventDoc.snapshotChanges().pipe(map(action =>{
      if (action.payload.exists == false){
        return null;
      }else {
        const data = action.payload.data() as EventInterface;
        data.id = action.payload.id;
        return data;
      }
    }))
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
