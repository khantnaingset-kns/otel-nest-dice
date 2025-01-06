import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiceModule } from './dice/dice.module';

@Module({
  imports: [DiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
