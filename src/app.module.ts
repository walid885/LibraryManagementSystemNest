import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [ BookmarkModule, AuthModule],
  controllers: [AppController,  AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
