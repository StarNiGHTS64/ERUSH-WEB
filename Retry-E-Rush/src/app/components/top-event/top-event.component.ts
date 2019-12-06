import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-top-event',
  templateUrl: './top-event.component.html',
  styleUrls: ['./top-event.component.css']
})
export class TopEventComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private events = [];
  private event = '';

  ngOnInit() {
    this.dataApi.getAllEvents().subscribe(events => {
      console.log('EVENTS: ', events);
      this.events = events;
    })
  }

}
