import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { GamingInterface } from '../../../models/gaming';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-list-gaming',
  templateUrl: './list-gaming.component.html',
  styleUrls: ['./list-gaming.component.css']
})
export class ListGamingComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { }
  private gamings: GamingInterface[];
  public isAdmin: any = null;
  public userUid: string = null;

  ngOnInit() {
    this.getListGamings();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => {
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          //this.isAdmin = true;
        })
      }
    })
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
