import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { EventInterface } from '../../../models/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private events: EventInterface[];

  ngOnInit() {
    this.getListEvents();
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
