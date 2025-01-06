import { Controller, Get } from '@nestjs/common';
import { DiceService } from './dice.service';

@Controller()
export class DiceController {
  constructor(private readonly service: DiceService) {}

  @Get('roll')
  getHello() {
    return { diceNumber: this.service.getRandomNumber() };
  }
}
