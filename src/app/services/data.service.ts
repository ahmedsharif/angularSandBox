import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class DataService {
  users: User[];
  data: Observable<any>;

  constructor() {
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
        image: "http://lorempixel.com/600/600/people/3",
        isActive: true,
        balance: 100,
        registered: new Date("01/02/2018 08:30:00"),
        hide: false
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
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        balance: 200,
        registered: new Date("02/03/2018 08:30:00"),
        hide: true
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
        image: "http://lorempixel.com/600/600/people/1",
        isActive: true,
        balance: 50,
        registered: new Date("03/01/2018 08:30:00"),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUsers(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);
      setTimeout(() => {
        observer.next(2)
      }, 2000);
      setTimeout(() => {
        observer.next(3)
      }, 3000);
      setTimeout(() => {
        observer.next(4)
      }, 4000);
    })
    return this.data;
  }

}
