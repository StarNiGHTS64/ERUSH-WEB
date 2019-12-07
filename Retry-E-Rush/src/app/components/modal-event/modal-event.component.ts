import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { EventInterface } from '../../models/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.css']
})
export class ModalEventComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
  }

  onSaveEvent(eventForm: NgForm): void {
    //NEW
    this.dataApi.addEvent(eventForm.value);
    //UPDATE
  }

}
