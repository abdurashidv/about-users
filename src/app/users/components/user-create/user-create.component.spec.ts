import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateComponent } from './user-create.component';
import {CustomSpinnerComponent} from '../custom-spinner/custom-spinner.component';
import {HttpClient} from '@angular/common/http';
import {UserErrorComponent} from './user-error/user-error.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerComponent} from 'ngx-spinner';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpService} from '../../../services/http.service';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserCreateComponent,
        UserErrorComponent,
        CustomSpinnerComponent,
        NgxSpinnerComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        HttpService,
        {
          provide: [HttpClientTestingModule]
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    component.spinnerShowable = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
