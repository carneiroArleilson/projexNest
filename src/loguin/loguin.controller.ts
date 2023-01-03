import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoguinService } from './loguin.service';
import { CreateLoguinDto } from './dto/create-loguin.dto';
import { UpdateLoguinDto } from './dto/update-loguin.dto';

@Controller('loguin')
export class LoguinController {
  constructor(private readonly loguinService: LoguinService) {}

  @Get()
  findAll() {
    return this.loguinService.findAll();
  }

  @Get('entrar')
  findOne(@Body() { email, senha }: { email: string; senha: string }) {
    return this.loguinService.findOne({ email, senha });
  }
}
