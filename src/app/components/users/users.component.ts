import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean;
  enableAdd: boolean;

  constructor() { }

  ngOnInit() {
    this.enableAdd = true;
    this.users = [
      {
        firstName: 'Charles',
        lastName: 'Carrier',
        age: 30,
        address: {
          street: '31 Hanzhong Lu',
          city: 'Shanghai',
          state: 'Shanghai'
        }
      },
      {
        firstName: 'Vijaykumar',
        lastName: 'Bhattacharji',
        age: 34,
        address: {
          street: '20 awesome st',
          city: 'Pune',
          state: 'Maharashtra'
        }
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 main st',
          city: 'Boston',
          state: 'MA'
        }
      }
    ];

    this.showExtended = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
