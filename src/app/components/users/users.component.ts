import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../../models/User";
import { DataService } from "../../services/data.service";

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
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
    
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
     });

    this.setCurrentClasses();
    this.setCurrentStyles();
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
      
      this.dataService.addUsers(value);
      this.form.reset();
    }
  }

}
