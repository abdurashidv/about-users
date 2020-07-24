import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {IUser} from '../../../modules/interface';
import { NgxSpinnerService } from 'ngx-spinner';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  searchText = '';
  spinnerShowable = false;
  noUser = '';
  isAscending = true;

  users: IUser[] = [];

  constructor(
    private http: HttpService,
    private spinner: NgxSpinnerService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.spinnerShowable = true;
    this.spinner.show();
    this.http.get('users/').subscribe(
      response => {
        if (response && (!response.length || response.length === 0)) {
          this.noUser = 'There is no user';
        } else {
          this.noUser = '';
          const temp = response;
          temp.sort((a, b) => a.id - b.id);
          this.users = temp.map(user => {
            user.first_name = this.userService.isLetter(user.first_name.charAt(0)) ?
              this.userService.capitalize(user.first_name) :
              user.first_name;
            user.last_name = this.userService.isLetter(user.last_name.charAt(0)) ?
              this.userService.capitalize(user.last_name) :
              user.last_name;
            return user;
          });
        }
        this.spinner.hide();
        this.spinnerShowable = false;
      },
      (error) => {
        this.noUser = 'There was an issue retrieving data. Please, retry later.';
        this.spinner.hide();
        this.spinnerShowable = false;
      }
    );
  }

  sortById() {
    this.isAscending = !this.isAscending;
    this.users.sort((a, b) => {
      if (this.isAscending) {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
}
