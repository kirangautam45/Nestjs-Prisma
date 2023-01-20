import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { BookmarkService } from './bookmark.service';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { get } from 'http';
import { getuid } from 'process';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post()
  createBook(
    @GetUser('id')
    userId: number,
    @Body() dto: CreateBookmarkDto,
  ) {
    return this.bookmarkService.createBookmark(userId, dto);
  }

  @Get(':id')
  getBookmarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.getBookmarkById(userId, bookmarkId);
  }

  @Get()
  getBookmarkMany(@GetUser('id') userId: number) {
    return this.bookmarkService.getBookmarkMany(userId);
  }
}
