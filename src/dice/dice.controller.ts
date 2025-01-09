import { Controller, Get, Ip } from '@nestjs/common';
import { DiceService } from './dice.service';
import { logger } from '../logger';

@Controller()
export class DiceController {
  constructor(private readonly service: DiceService) {}

  @Get('roll')
  getHello(@Ip() ip: string) {
    logger.info(`Rolling the dice at ${new Date().toISOString()}, from ${ip}`);
    return { diceNumber: this.service.getRandomNumber() };
  }
}
