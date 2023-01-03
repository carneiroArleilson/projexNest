import { Module } from '@nestjs/common';
import { LoguinService } from './loguin.service';
import { LoguinController } from './loguin.controller';

@Module({
  controllers: [LoguinController],
  providers: [LoguinService]
})
export class LoguinModule {}
