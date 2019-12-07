import { Component, OnInit } from '@angular/core';
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

  ngOnInit() {
  }

  onSaveGaming(gamingForm: NgForm): void {
    //NEW
    this.dataApi.addGaming(gamingForm.value);
    //UPDATE
  }

}
