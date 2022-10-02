import { Controller, Post } from '@nestjs/common';
import { TestQueueService } from './test-queue.service';

@Controller('test-queue')
export class TestQueueController {

    constructor(private testQueueService:TestQueueService){}

    @Post('create-test-queue')
    async createTestQueue(){
        this.testQueueService.createTestQueue();
    }

}
