import { Test, TestingModule } from '@nestjs/testing';
import { TestQueueController } from './test-queue.controller';

describe('TestQueueController', () => {
  let controller: TestQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestQueueController],
    }).compile();

    controller = module.get<TestQueueController>(TestQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
