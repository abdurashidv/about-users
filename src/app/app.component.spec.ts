import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Router} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        {provide: Router, useValue: mockRouter}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));
});
