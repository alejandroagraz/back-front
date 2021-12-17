import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthsResolver } from './auths.resolver';
import { AuthsService } from './auths.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { ArticleModule } from '../articles/articles.module';
import { DatabaseModule } from '../database/database.module';
import { ArticlesRepository } from '../articles/repositories/article.repository';
import { usersProviders } from '../users/users.providers';
import { JwtStrategy } from './strategies/jwt.strategy';
import { articlesProviders } from '../articles/articles.providers';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    PassportModule,
    ArticleModule,
    HttpModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '7200s' },
    }),
  ],
  providers: [
    AuthsResolver,
    JwtStrategy,
    AuthsService,
    UsersService,
    ArticlesRepository,
    ...usersProviders,
    ...articlesProviders,
  ],
  exports: [AuthsService],
})
export class AuthsModule {}
