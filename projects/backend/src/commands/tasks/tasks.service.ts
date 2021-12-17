import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ArticlesRepository } from '../../articles/repositories/article.repository';

@Injectable()
export class TasksService {
  constructor(private readonly articlesRepository: ArticlesRepository) {}

  @Cron(CronExpression.EVERY_HOUR)
  handleCron() {
    this.articlesRepository.generateDataApi();
    console.log('Task executed');
  }
}
