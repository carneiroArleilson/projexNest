import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req);
    return req.user;
  }
  // constructor(private readonly appService: AppService) {}

  // @Get('test')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('test1')
  // acao(): string {
  //   return 'FullCycle';
  // }
}
