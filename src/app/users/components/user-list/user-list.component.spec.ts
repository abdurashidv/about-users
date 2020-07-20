import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import {CustomSpinnerComponent} from '../custom-spinner/custom-spinner.component';
import {HttpService} from '../../../services/http.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserService} from '../../../services/user.service';
import {FormsModule} from '@angular/forms';
import {FilterusernamePipe} from '../../pipes/filterusername.pipe';
import {RouterModule} from '@angular/router';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      declarations: [
        UserListComponent,
        CustomSpinnerComponent,
        FilterusernamePipe
      ],
      providers: [
        HttpService,
        NgxSpinnerService,
        UserService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
