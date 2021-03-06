import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { GamingInterface } from '../../models/gaming';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-gaming',
  templateUrl: './modal-gaming.component.html',
  styleUrls: ['./modal-gaming.component.css']
})
export class ModalGamingComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  ngOnInit() {
  }

  onSaveGaming(gamingForm: NgForm): void {
    //console.log('gamingForm.value.id', gamingForm.value.id);

    if (gamingForm.value.id == null) {
      //NEW
      gamingForm.value.userUid = this.userUid;
      this.dataApi.addGaming(gamingForm.value);
    } else {
      //UPDATE
      this.dataApi.updateGaming(gamingForm.value);
    }
    gamingForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
