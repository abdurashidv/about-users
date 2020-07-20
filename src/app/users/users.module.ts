import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './layout/header/header.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterusernamePipe} from './pipes/filterusername.pipe';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import {UserErrorComponent} from './components/user-create/user-error/user-error.component';
import {CustomSpinnerComponent} from './components/custom-spinner/custom-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserCreateComponent,
    UserErrorComponent,
    FilterusernamePipe,
    CustomSpinnerComponent
  ],
  providers: [
    NgxSpinnerService
  ],
})

export class UsersModule { }
