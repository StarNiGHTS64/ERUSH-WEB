import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { EventInterface } from '../../../models/event';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private events: EventInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListEvents();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          //this.isAdmin = true;
        })
      }
    })
  }

  getListEvents(){
    this.dataApi.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

  onDeleteEvent(idEvent: string): void{
    console.log('DELETE Event', idEvent);
    const confirmacion = confirm('Are you sure?')
    if (confirmacion){
      this.dataApi.deleteEvent(idEvent);
    }
  }

  onPreUpdateEvent(event: EventInterface){
    console.log('EVENT', event);
    this.dataApi.selectedEvent = Object.assign({}, event);
  }

}
