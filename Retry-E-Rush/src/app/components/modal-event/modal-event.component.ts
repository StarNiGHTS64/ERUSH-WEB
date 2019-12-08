import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveEvent(eventForm: NgForm): void {
    console.log('eventForm.value.id', eventForm.value.id);
    if (eventForm.value.id == null){
      //New
      this.dataApi.addEvent(eventForm.value);
    }else{
      //Update
      this.dataApi.updateEvent(eventForm.value);
    }
    eventForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
