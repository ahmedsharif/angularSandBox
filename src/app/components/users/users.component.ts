import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    }
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles: {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        age: 23,
        email: "john@gmail.com",
        address: {
          street: "72",
          city: "Lahore",
          state: "pak"
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00'),
        hide: false,
      },
      {
        firstName: "Kevin",
        lastName: "Tony",
        age: 23,
        email: "kevin@gmail.com",
        address: {
          street: "34",
          city: "Lahore",
          state: "pak"
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        balance: 200,
        registered: new Date('02/03/2018 08:30:00'),
        hide: true,
      },
      {
        firstName: "Donald",
        lastName: "Trump",
        age: 23,
        email: "donald@gmail.com",
        address: {
          street: "26",
          city: "Lahore",
          state: "pak"
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 50,
        registered: new Date('03/01/2018 08:30:00'),
        hide: true,
      }
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: "Jonny",
    //   lastName: "Wick",
   
    // });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      email: '',
      address: {
        street: '',
        city: '',
        state: '',
      }
    }
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended? '0' : '40px',
      'font-size': this.showExtended? '': '40px'
    }
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  fireEvent(e) {
    console.log(e.target.value);
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) { 
      console.log("form is not valid");
    }
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = false;
      this.users.unshift(value);
      this.form.reset();
    }
  }

}
