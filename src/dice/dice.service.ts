import { Injectable } from '@nestjs/common';

@Injectable()
export class DiceService {
  getRandomNumber(min: number = 1, max: number = 6): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
