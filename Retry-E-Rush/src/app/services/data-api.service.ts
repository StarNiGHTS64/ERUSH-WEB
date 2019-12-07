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
  public selectedGaming: GamingInterface = {
    id:null
  };
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
  addGaming(gaming: GamingInterface): void{
    this.gamingsCollection.add(gaming);
  }
  updateGaming(gaming: GamingInterface): void{
    let idGaming = gaming.id;
    this.gamingDoc = this.afs.doc<GamingInterface>(`gaming/${idGaming}`);
    this.gamingDoc.update(gaming);
  }
  deleteGaming(idGaming: string): void{
    this.gamingDoc = this.afs.doc<GamingInterface>(`gaming/${idGaming}`);
    this.gamingDoc.delete();
  }

  //---------------------------------EVENT----------------------//
  private eventsCollection: AngularFirestoreCollection<EventInterface>;
  private events: Observable<EventInterface[]>
  private eventDoc: AngularFirestoreDocument<EventInterface>;
  private event: Observable<EventInterface>
  public selectedEvent: EventInterface = {
    id:null

  };
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
    this.eventDoc = this.afs.doc<EventInterface>(`event/${idEvent}`);
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
  addEvent(event: EventInterface): void{
    this.eventsCollection.add(event);
  }
  updateEvent(event: EventInterface): void{
    let idEvent = event.id;
    this.eventDoc = this.afs.doc<EventInterface>(`event/${idEvent}`);
    this.eventDoc.update(event);
  }
  deleteEvent(idEvent: string): void{
    this.eventDoc = this.afs.doc<EventInterface>(`event/${idEvent}`);
    this.eventDoc.delete();
  }

  //---------------------------------USER----------------------//
  private gamersCollection: AngularFirestoreCollection<UserInterface>;
  private gamers: Observable<UserInterface[]>
  getAllUsers(){}
  addUser(): void{}
  updateUser(): void{}
  deleteUser(): void{}

}
