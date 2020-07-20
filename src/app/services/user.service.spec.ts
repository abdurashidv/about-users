import { TestBed} from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UserService]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should be able to check if it is letter', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.isLetter('a')).toBeTruthy();
  });

  it('should be able to capitalize first letter and lowercase rest', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.capitalize('aGood')).toEqual('Agood');
  });
});
