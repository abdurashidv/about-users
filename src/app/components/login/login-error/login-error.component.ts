import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})
export class LoginErrorComponent {

  @Input() control: FormControl;
  @Input() name: string;

  constructor() { }

}
