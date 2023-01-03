import { Test, TestingModule } from '@nestjs/testing';
import { LoguinController } from './loguin.controller';
import { LoguinService } from './loguin.service';

describe('LoguinController', () => {
  let controller: LoguinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoguinController],
      providers: [LoguinService],
    }).compile();

    controller = module.get<LoguinController>(LoguinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
