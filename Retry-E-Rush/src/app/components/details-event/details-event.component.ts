import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { EventInterface } from '../../models/event';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public event: EventInterface = {};

  ngOnInit() {
    const idEvent = this.route.snapshot.params['id'];
    this.getDetails(idEvent);
  }

  getDetails(idEvent: string): void {
    this.dataApi.getOneEvent(idEvent).subscribe(event => {
      console.log('EVENT DETAILS: ', event);
      this.event = event;
    });
  }

}
