import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../../services/http.service';
import {IUser} from '../../../modules/interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  private readonly CREATE = 'Create';
  private readonly EDIT = 'Edit';

  id = '';
  action = this.CREATE;
  spinnerShowable = false;
  user: IUser = {} as any;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private http: HttpService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.action = this.EDIT;
      this.getUserById(this.id);
    } else {
      this.setUserInfo();
    }
  }

  getUserById(id: string) {
    this.spinnerShowable = true;
    this.spinner.show();

    this.http.get(`users/${id}/`).subscribe(
      (response) => {
        this.spinnerShowable = false;
        this.spinner.hide();

        this.user = response;
        this.setUserInfo(id, response);

        // disable last_login and is_supervisor
        this.last_login.disable();
        this.is_supervisor.disable();
      },
      (error) => {
        this.spinnerShowable = false;
        this.spinner.hide();
      }
    );
  }

  processUser() {
    if (this.hasValidInputs()) {
      const body = {
        id: this.id,
        username: this.username.value,
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        password: this.password.value,
        is_active: this.is_active.value,
        last_login: this.id ? this.last_login.value : '',
        is_supervisor: this.id ? this.is_supervisor.value : ''
      };

      let request;
      if (this.id) {
        request = this.http.put(`users/${this.id}/`, body);
      } else {
        request = this.http.post('users/', body);
      }

      request.subscribe(
        (response) => {
          this.router.navigate(['/users']);
        },
        (error) => {},
        (done) => {
          this.enableFields();
        }
      );
    }
  }

  get username() {
    return this.userForm.get('username');
  }

  get first_name() {
    return this.userForm.get('first_name');
  }

  get last_name() {
    return this.userForm.get('last_name');
  }

  get password() {
    return this.userForm.get('password');
  }

  get is_active() {
    return this.userForm.get('is_active');
  }

  get last_login() {
    return this.userForm.get('last_login');
  }

  get is_supervisor() {
    return this.userForm.get('is_supervisor');
  }

  private setUserInfo(id?: string, user?: IUser) {
    this.userForm = new FormGroup({
      username: new FormControl(id ? user.username : '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(150), Validators.pattern('^[\\w.@+-]+$')]),
      first_name: new FormControl(id ? user.first_name : '',
        [Validators.maxLength(30)]),
      last_name: new FormControl(id ? user.last_name : '',
        [Validators.maxLength(150)]),
      password: new FormControl(id ? user.password : '',
        [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^(?=.*[A-Z])(?=.*\\d).{8,}$')]),
      is_active: new FormControl(id ? user.is_active : '', [Validators.required]),
      last_login: new FormControl(id ? user.last_login : ''),
      is_supervisor: new FormControl(id ? user.is_supervisor : '')
    });
  }

  private hasValidInputs(): boolean {
    if (this.userForm.status === 'VALID') {
      return true;
    }

    this.username.markAsTouched({onlySelf: true});
    this.first_name.markAsTouched({onlySelf: true});
    this.last_name.markAsTouched({onlySelf: true});
    this.password.markAsTouched({onlySelf: true});
    this.is_active.markAsTouched({onlySelf: true});
    this.last_login.markAsTouched({onlySelf: true});
    this.is_supervisor.markAsTouched({onlySelf: true});

    return false;
  }

  private disableFields() {
    this.username.disable();
    this.first_name.disable();
    this.last_name.disable();
    this.password.disable();
    this.is_active.disable();
  }

  private enableFields() {
    this.username.enable();
    this.first_name.enable();
    this.last_name.enable();
    this.password.enable();
    this.is_active.enable();
  }

}
