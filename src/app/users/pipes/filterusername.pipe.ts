import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../../modules/interface';

@Pipe({
  name: 'filterusername'
})
export class FilterusernamePipe implements PipeTransform {

  transform(users: IUser[], searchText: string): any[] {
    if (!users){
      return [];
    }
    if (!searchText) {
      return users;
    }
    searchText = searchText.toLowerCase();

    return users.filter( user => {
      return user.username.toLowerCase().startsWith(searchText);
    });
  }

}
