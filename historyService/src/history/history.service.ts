import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './entity/history.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}
  allUsersHistory(): Promise<History[]> {
    return this.historyRepository.find();
  }
  viewUserHistory(
    user_id: number,
    filter: string = 'ASC',
    page: number = 0,
  ): Promise<History> {
    const result = this.historyRepository.query(
      `
      SELECT * FROM history WHERE user_id=$1 ORDER BY $2 LIMIT $3 OFFSET $4`,
      [user_id, filter, 10, page],
    );
    return result;
    // return this.historyRepository.findOneBy({ user_id: user_id });
  }
  createHistory(CreateHistoryDto: CreateHistoryDto): Promise<History> {
    const history: History = new History();
    history.user_id = CreateHistoryDto.user_id;
    history.action = CreateHistoryDto.action;
    history.date_action = new Date().toISOString();
    return this.historyRepository.save(history);
  }
}
