import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoguinService } from './loguin.service';

@Controller('loguin')
export class LoguinController {
  constructor(private readonly loguinService: LoguinService) {}

  @Get()
  findAll() {
    return this.loguinService.findAll();
  }

  @Post('entrar')
  async findOne(@Body() { email, senha }: { email: string; senha: string }) {
    return this.loguinService.findOne({ email, senha });
  }
}
