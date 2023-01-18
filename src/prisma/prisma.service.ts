import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
// npx prisma migrate dev to restart prisma
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:123@localhost:5434/nest?schema=public',
        },
      },
    });
  }
}
