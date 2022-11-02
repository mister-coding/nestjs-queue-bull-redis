import { createBullBoard } from '@bull-board/api';
import { ExpressAdapter, } from '@bull-board/express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { Queue } from 'bull';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath('/bull-admin');
  const aQueue = app.get<Queue>(
    `BullQueue_test-queue`
  )
  createBullBoard({
    queues: [
      new BullMQAdapter(aQueue)
    ],
    serverAdapter,
  })
  app.use(
    '/bull-admin',
    serverAdapter.getRouter()
  );

  await app.listen(3000);
}
bootstrap();
