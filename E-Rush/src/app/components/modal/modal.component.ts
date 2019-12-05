import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../../services/data-api.service";
import { GamingInterface } from "../../models/gaming";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {}

  onSaveGaming(gamingForm: NgForm): void {
    this.dataApi.addGaming(gamingForm);
  }
}
