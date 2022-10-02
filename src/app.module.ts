import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { TestQueueModule } from './test-queue/test-queue.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    TestQueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
