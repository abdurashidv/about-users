import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserErrorComponent } from './user-error.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('UserErrorComponent', () => {
  let component: UserErrorComponent;
  let fixture: ComponentFixture<UserErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserErrorComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
