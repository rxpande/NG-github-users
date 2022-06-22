import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users;
  constructor(private userservice: UsersService) { }

  ngOnInit() {
    // using | async (pipe) this will unsubscribe
    // unwrap the observable
   this.users = this.userservice.getAllUsers();
}

  // would need to use ngOnDestroy to unsubscribe
  //   this.userservice.getAllUsers()
  //    .subscribe(users => {
  //    console.log(users);
  //    this.users = users;
  // });

}

