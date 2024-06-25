import { Test, TestingModule } from '@nestjs/testing';
import { HistoryController } from './history/history.controller';
import { HistoryService } from './history/history.service';

describe('AppController', () => {
  let appController: HistoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HistoryController],
      providers: [HistoryService],
    }).compile();

    appController = app.get<HistoryController>(HistoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.findAll).toBe('Hello World!');
    });
  });
});
