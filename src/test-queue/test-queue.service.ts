import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import {minutes,seconds} from 'milliseconds';

@Injectable()
export class TestQueueService {
    constructor(@InjectQueue('test-queue') private testQueue: Queue){}

    async createTestQueue(){
        console.log('Test Queue Started');
        this.testQueue.add('test',{},{delay:minutes(1)})
    }
    
}
