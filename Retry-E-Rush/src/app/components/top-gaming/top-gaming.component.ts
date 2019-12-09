import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-top-gaming',
  templateUrl: './top-gaming.component.html',
  styleUrls: ['./top-gaming.component.css']
})
export class TopGamingComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private gamings = [];
  private gaming = '';

  ngOnInit() {
    this.dataApi.getTopGamings().subscribe(gamings => {
      console.log('GAMINGS: ', gamings);
      this.gamings = gamings;
    })
  }

}
