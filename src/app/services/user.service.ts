import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  isLetter(c: string): boolean {
    return c.toLowerCase() !== c.toUpperCase();
  }

  capitalize(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  }
}
