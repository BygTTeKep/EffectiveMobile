import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './entity/history.entity';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { Users } from './entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History, Users])],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
