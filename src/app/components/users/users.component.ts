import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  newUser: User;
  userList: User[];
  genders: string[];

  constructor() {
    this.newUser = new User('', 0, '', '');
    this.userList = [];
    this.genders = ['Male', 'Female', 'Other'];
  }

  ngOnInit(): void {}

  addUser(): void {
    if (this.newUser.age < 0) {
      alert('Age must be greater than 0');
      return;
    }
    this.userList.push(
      new User(
        this.newUser.name,
        this.newUser.age,
        this.newUser.email,
        this.newUser.gender
      )
    );
  }
}
