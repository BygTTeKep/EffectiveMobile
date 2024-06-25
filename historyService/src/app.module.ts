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
      password: '5v3G584ob5mxy5i9hS8X8F3',
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
