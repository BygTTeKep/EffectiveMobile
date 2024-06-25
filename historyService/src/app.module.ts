import { Module } from '@nestjs/common';
import { HistoryController } from './history/history.controller';
import { HistoryService } from './history/history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './history/entity/history.entity';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-service',
      port: 5432,
      password: 'o5hapLMEM1',
      username: 'postgres',
      entities: [History],
      database: 'Testovoe',
      synchronize: true,
      logging: true,
    }),
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
