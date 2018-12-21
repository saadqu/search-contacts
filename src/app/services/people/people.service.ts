import { People } from "./../../models/people";
import { Injectable } from "@angular/core";
import people from "../../data/people.json";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor() {}

  // this method will return the JSON data.
  getPeople() {
    return people.People;
  }
}
