import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModuleController } from './serivce/module/module.controller';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UserModule, BookmarkModule, AuthModule],
  controllers: [AppController, ModuleController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
