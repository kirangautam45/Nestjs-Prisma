import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: ' I am Sign Up ' };
  }
  login() {
    return { msg: 'I am sign In' };
  }
}
