import { Test, TestingModule } from '@nestjs/testing';
import { LoguinService } from './loguin.service';

describe('LoguinService', () => {
  let service: LoguinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoguinService],
    }).compile();

    service = module.get<LoguinService>(LoguinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
