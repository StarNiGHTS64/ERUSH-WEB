import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../../services/data-api.service";
import { GamingInterface } from "../../models/gaming";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-details-gaming",
  templateUrl: "./details-gaming.component.html",
  styleUrls: ["./details-gaming.component.css"]
})
export class DetailsGamingComponent implements OnInit {
  constructor(private dataApi: DataApiService, private route: ActivatedRoute) {}
  public gaming: GamingInterface = {};

  ngOnInit() {
    const idGaming = this.route.snapshot.params["id"];
    this.getDetails(idGaming);
  }

  getDetails(idGaming: string): void {
    this.dataApi.getOneGaming(idGaming).subscribe(gaming => {
      this.gaming = gaming;
    });
  }
}
