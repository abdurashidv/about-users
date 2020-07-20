import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth/auth.guards';

export const mainRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', canActivate: [AuthGuard], loadChildren: './users/users.module#UsersModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
