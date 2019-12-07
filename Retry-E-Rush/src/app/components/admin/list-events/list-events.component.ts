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
    })
  }

  onDeleteEvent(){
    console.log('DELETE EVENT');
  }

}
