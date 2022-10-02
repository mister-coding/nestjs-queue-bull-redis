import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TestQueueService } from './test-queue.service';
import { TestQueueProcessor } from './test-queue.processor';
import { TestQueueController } from './test-queue.controller';

@Module({
    imports: [
        BullModule.registerQueue(
            {
                name: 'test-queue',
            }
        )

    ],
    providers: [TestQueueService,TestQueueProcessor],
    controllers: [TestQueueController]
})
export class TestQueueModule { }
