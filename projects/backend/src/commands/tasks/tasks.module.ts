import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { HttpModule } from '@nestjs/axios';
import { ArticleModule } from '../../articles/articles.module';
import { ArticlesRepository } from '../../articles/repositories/article.repository';
import { articlesProviders } from '../../articles/articles.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [ArticleModule, HttpModule, DatabaseModule],
  providers: [TasksService, ArticlesRepository, ...articlesProviders],
})
export class TasksModule {}
