import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { GamingInterface } from '../../../models/gaming';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-gaming',
  templateUrl: './list-gaming.component.html',
  styleUrls: ['./list-gaming.component.css']
})
export class ListGamingComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private gamings: GamingInterface[];

  ngOnInit() {
    this.getListGamings();
  }

  getListGamings(){
    this.dataApi.getAllGamings().subscribe(gamings => {
      this.gamings = gamings;
    })
  }

  onDeleteGaming(idGaming){
    console.log('DELETE GAMING', idGaming);
    this.dataApi.deleteGaming(idGaming);
  }

}
