import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { GamingInterface } from "../models/gaming";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataApiService {
  constructor(private afs: AngularFirestore) {
    this.gamingCollection = afs.collection<GamingInterface>("gaming");
    this.gamings = this.gamingCollection.valueChanges();
  }
  private gamingCollection: AngularFirestoreCollection<GamingInterface>;
  private gamings: Observable<GamingInterface[]>;
  private gamingDoc: AngularFirestoreDocument<GamingInterface>;
  private gaming: Observable<GamingInterface>;

  getAllGamings() {
    return (this.gamings = this.gamingCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as GamingInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    ));
  }

  getOneGaming(idGaming: string) {
    this.gamingDoc = this.afs.doc<GamingInterface>(`gaming/${idGaming}`);
    return (this.gaming = this.gamingDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists == false) {
          return null;
        } else {
          const data = action.payload.data() as GamingInterface;
          data.id = action.payload.id;
          return data;
        }
      })
    ));
  }

  addGaming(gaming: GamingInterface): void {
    this.gamingCollection.add(gaming);
  }
  updateGaming(gaming: GamingInterface): void {
    let idGaming = gaming.id;
    this.gamingDoc = this.afs.doc<GamingInterface>(`gaming/${idGaming}`);
    this.gamingDoc.update(gaming);
  }
  deleteGaming(idGaming: GamingInterface): void {
    this.gamingDoc = this.afs.doc<GamingInterface>(`gaming/${idGaming}`);
    this.gamingDoc.delete();
  }

  getAllEvents() {}
  addEvent() {}
  updateEvent() {}
  deleteEvent() {}
}
