import { Component, OnInit, Input } from "@angular/core";
import { People } from "../models/people";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  @Input("person") person: People;
  constructor() {}

  ngOnInit() {}

  // this method is for the rating.
  counter(i: number) {
    return new Array(i);
  }
}
