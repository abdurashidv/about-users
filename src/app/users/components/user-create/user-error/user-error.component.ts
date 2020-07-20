import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-error',
  templateUrl: './user-error.component.html',
  styleUrls: ['./user-error.component.css']
})
export class UserErrorComponent {

  @Input() control: FormControl;
  @Input() name: string;

  constructor() { }

}
