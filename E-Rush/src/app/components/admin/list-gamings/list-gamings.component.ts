import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../../../services/data-api.service";
import { GamingInterface } from "../../../models/gaming";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-list-gamings",
  templateUrl: "./list-gamings.component.html",
  styleUrls: ["./list-gamings.component.css"]
})
export class ListGamingsComponent implements OnInit {
  constructor(private dataApi: DataApiService) {}

  private gamings: GamingInterface[];

  ngOnInit() {}

  getListGamings() {
    this.dataApi.getAllGamings().subscribe(gamings => {
      this.gamings = gamings;
    });
  }
}
