import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { PrismaService } from '../prisma/prisma.service';
import { EditBookmarkDto } from './dto/edit-bookmark.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    try {
      const bookMark = await this.prisma.bookmark.create({
        data: {
          userId,
          ...dto,
          updatedAT: new Date(),
        },
      });
      return bookMark;
    } catch (error) {
      throw error;
    }
  }
  getBookmarkById(userId: number, bookmarkId: number) {
    return this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });
  }
  getBookmarkMany(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }
  async editBookmark(userId: number, bookmarkId: number, dto: EditBookmarkDto) {
    try {
      const findBook = await this.prisma.bookmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });
      if (!findBook || findBook.userId !== userId)
        throw new ForbiddenException('Access to resources denied');

      return this.prisma.bookmark.update({
        where: {
          id: bookmarkId,
        },
        data: {
          ...dto,
          updatedAT: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P5007') {
          throw new ForbiddenException('Unauthorized');
        }
      }
      throw error;
    }
  }
  async deleteBookmark(userId: number, bookmarkId: number) {
    const findBook = await this.prisma.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });
    if (!findBook || findBook.userId !== userId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
