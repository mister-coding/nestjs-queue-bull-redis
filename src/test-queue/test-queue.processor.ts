import { Process, Processor } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";

@Injectable()
@Processor('test-queue')
export class TestQueueProcessor {

    @Process('test')
    async testProcessor(){
        console.log('Test Queue Listened');
    }

}
