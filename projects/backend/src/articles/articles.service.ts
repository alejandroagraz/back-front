import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Article } from './interfaces/article.interface';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject('DATA_MODEL')
    private readonly articleModel: Model<Article>,
  ) {}

  async find(query: FilterQuery<Article>): Promise<Article[]> {
    return this.articleModel.find(query).sort({ created_at: -1 }).exec();
  }

  async findByIdAndUpdate(
    _id: string,
    query: UpdateQuery<Article>,
  ): Promise<Article> {
    return this.articleModel.findByIdAndUpdate(_id, query).exec();
  }
}
