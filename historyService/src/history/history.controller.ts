import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  createAcrion(@Body() body: CreateHistoryDto) {
    return this.historyService.createHistory(body);
  }
  @Get()
  findAll() {
    return this.historyService.allUsersHistory();
  }
  @Get(':id')
  findOneById(
    @Param('id') id: string,
    @Query() query: { filter?: string; page?: string },
  ) {
    const { filter, page } = query;
    return this.historyService.viewUserHistory(+id, filter, Number(page));
  }
}
