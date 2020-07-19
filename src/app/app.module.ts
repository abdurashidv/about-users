import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth.guards';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainRoutingModule } from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginErrorComponent} from './components/login/login-error/login-error.component';
import {TokenInterceptor} from './auth/TokenInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginErrorComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
