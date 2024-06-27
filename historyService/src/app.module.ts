import { Module } from '@nestjs/common';
import { HistoryController } from './history/history.controller';
import { HistoryService } from './history/history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './history/entity/history.entity';
import { HistoryModule } from './history/history.module';
import { Users } from './history/entity/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres-service',
      port: 5432,
      password: 'o5hapLMEM1',
      username: 'postgres',
      entities: [History, Users],
      database: 'Testovoe',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    HistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
