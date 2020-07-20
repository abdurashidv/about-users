import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSpinnerComponent } from './custom-spinner.component';
import {NgxSpinnerComponent, NgxSpinnerService} from 'ngx-spinner';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CustomSpinnerComponent', () => {
  let component: CustomSpinnerComponent;
  let fixture: ComponentFixture<CustomSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomSpinnerComponent,
        NgxSpinnerComponent
      ],
      providers: [
        NgxSpinnerService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
