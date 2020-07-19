import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {AppComponent} from './components/app/app.component';
import {HeaderComponent} from './layout/header/header.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserCreateComponent} from './components/user-create/user-create.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserCreateComponent
  ],
  providers: [
  ],
})

export class UsersModule { }
