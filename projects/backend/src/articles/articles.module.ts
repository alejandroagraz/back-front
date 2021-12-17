import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ArticleResolver } from './article.resolver';
import { ArticlesService } from './articles.service';
import { ArticlesRepository } from './repositories/article.repository';
import { DatabaseModule } from '../database/database.module';
import { articlesProviders } from './articles.providers';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [
    ArticleResolver,
    ArticlesService,
    ArticlesRepository,
    ...articlesProviders,
  ],
})
export class ArticleModule {}
