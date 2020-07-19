import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {IUser} from '../../../modules/interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchText = '';
  users: IUser[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get('users/').subscribe(
      response => {
        this.users = response;
        this.users.sort((a, b) => a.id - b.id);

      }
    );
  }

}
