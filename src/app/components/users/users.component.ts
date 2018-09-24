import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "ahmed",
        lastName: "sharif",
        age: 23,
        address: {
          street: "20",
          city: "Lahore",
          state: "pak"
        }
      },
      {
        firstName: "Kevin",
        lastName: "Tony",
        age: 23,
        address: {
          street: "20",
          city: "Lahore",
          state: "pak"
        }
      },
      {
        firstName: "Donald",
        lastName: "Trump",
        age: 23,
        address: {
          street: "20",
          city: "Lahore",
          state: "pak"
        }
      }
    ];
    this.loaded = true;

    this.addUser({
      firstName: "Jonny",
      lastName: "Wick",
   
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
