import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../../services/http.service';
import {IUser} from '../../../modules/interface';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: IUser = {} as any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUserById(id);
  }

  getUserById(id: string) {
    this.http.get(`users/${id}/`).subscribe(
      response => {
        this.user = response;
      }
    );
  }

}
