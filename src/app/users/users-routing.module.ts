import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserListComponent} from './components/user-list/user-list.component';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {AppComponent} from './components/app/app.component';

const usersRoutes: Routes = [
  {path: '', component: AppComponent, children: [
      {path: 'users', component: UserListComponent},
      {path: 'user/:id', component: UserCreateComponent},
      {path: 'create', component: UserCreateComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
