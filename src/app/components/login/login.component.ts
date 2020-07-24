import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../services/http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup =  new FormGroup({
    loginName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  loginErrorMessages: any;
  isDisabled = false;

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/users']);
    }
  }

  loginUser() {
    if (this.hasValidInputs()) {
      this.isDisabled = true;
      const body = {
        username: this.loginForm.value.loginName,
        password: this.loginForm.value.password
      };

      this.http.postForLogin(body)
        .subscribe(
          (response: any) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/users']);
          },
          (error: any) => {
            this.isDisabled = false;
            this.loginErrorMessages = error.error.non_field_errors;
          }
        );
    }
  }

  get loginName() {
    return this.loginForm.get('loginName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private hasValidInputs(): boolean {
    if (this.loginForm.status === 'VALID') {
      return true;
    }

    this.loginName.markAsTouched({onlySelf: true});
    this.password.markAsTouched({onlySelf: true});

    return false;
  }

}
