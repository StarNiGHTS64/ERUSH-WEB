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

  onDeleteGaming(idGaming: string): void{
    console.log('DELETE GAMING', idGaming);
    const confirmacion = confirm('Are you sure?')
    if (confirmacion){
      this.dataApi.deleteGaming(idGaming);
    }
  }

  onPreUpdateGaming(gaming: GamingInterface){
    console.log('GAMING LIST:', gaming);
    this.dataApi.selectedGaming = Object.assign({}, gaming);
  }
//
}
