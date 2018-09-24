import { Component, OnInit } from "@angular/core";

import { User } from '../../models/User';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  //Properties
  user: User;

  // Methods
  constructor() {
  }

  ngOnInit() {
    this.user = {
      firstName: "ahmed",
      lastName: "sharif",
      age: 23,
      address: {
        street: "20",
        city: "Lahore",
        state: "pak"
      }
    };
  }
}

