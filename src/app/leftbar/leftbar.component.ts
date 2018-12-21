import { NavbarComponent } from "./../navbar/navbar.component";
import { People } from "./../models/people";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-leftbar",
  templateUrl: "./leftbar.component.html",
  styleUrls: ["./leftbar.component.css"]
})
export class LeftbarComponent implements OnInit {
  @Input("people") people: People[];
  @Input("person") person: any;
  constructor(private NavbarComponent: NavbarComponent) {}

  ngOnInit() {}

  // this method will be called on the click of the left navbar.
  openContact(person) {
    this.NavbarComponent.changeContact(person); // this will change the person from the navbar and the data will be changed from everywhere.
  }
}
