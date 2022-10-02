import { Test, TestingModule } from '@nestjs/testing';
import { TestQueueService } from './test-queue.service';

describe('TestQueueService', () => {
  let service: TestQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestQueueService],
    }).compile();

    service = module.get<TestQueueService>(TestQueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
