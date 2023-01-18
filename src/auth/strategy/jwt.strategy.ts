import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }
  //   async validate(email: string, password: string): Promise<any> {
  //     const user = await this.authService.signToken(email, Number(password));
  //     if (!user) {
  //       throw new UnauthorizedException();
  //     }
  //     return user;
  //   }
}
