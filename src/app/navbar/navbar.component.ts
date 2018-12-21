import { People } from "./../models/people";
import { Component, OnInit, Input } from "@angular/core";
import { PeopleService } from "./../services/people/people.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public people: any;
  public person: any;

  constructor(private PeopleService: PeopleService) {}

  ngOnInit() {
    this.getPeople();
  }

  // the method is called when there is nothing on the search bar.
  getPeople() {
    this.people = this.PeopleService.getPeople();
    this.person = this.people[0];
  }

  // this method will be called from the left bar on the click of the contacts.
  changeContact(person: any) {
    this.person = person;
  }

  // this method will be called on the click of the search button.
  search(key: string) {
    const person = this.PeopleService.getPeople().filter(
      x => x.name.toLowerCase().search(key.toLowerCase()) != -1
    );
    if (person) {
      this.person = person[0];
    } else {
      this.person = null;
    }
    this.people = [];
    person.forEach(ele => {
      this.people.push(ele);
    });
    if (key == "") {
      this.getPeople();
    }
  }
}
