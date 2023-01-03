import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoguinModule } from './loguin/loguin.module';
import { UserModule } from './user/user.module';
import { ImovelModule } from './imovel/imovel.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LoguinModule, UserModule, ImovelModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
