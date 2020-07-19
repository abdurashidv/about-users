import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './auth/auth.guards';

const mainRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', canActivate: [AuthGuard], component: AppComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: '**', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
