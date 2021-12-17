import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Article } from '../interfaces/article.interface';
import { HttpService } from '@nestjs/axios';
import { ArticleInput } from '../inputs/article.input';

@Injectable()
export class ArticlesRepository {
  constructor(
    @Inject('DATA_MODEL')
    private readonly articleModel: Model<Article>,
    private readonly httpService: HttpService,
  ) {}

  async generateDataApi() {
    const response = await this.getDataApi();
    const dataDto = response.map(function (resp) {
      const createDto: ArticleInput = {
        story_title: resp.story_title,
        title: resp.title,
        story_url: resp.story_url,
        author: resp.author,
        created_at: resp.created_at,
      };
      return createDto;
    });

    for (const data of dataDto) {
      const resp = await this.articleModel
        .find({
          $and: [
            { story_title: data.story_title },
            { title: data.title },
            { story_url: data.story_url },
            { author: data.author },
          ],
        })
        .exec();
      if (resp.length == 0) {
        const createdData = new this.articleModel(data);
        await createdData.save();
      }
    }
  }

  async getDataApi() {
    return this.httpService
      .get(process.env.API_EXT)
      .toPromise()
      .then((res) => res.data.hits);
  }

  async isData() {
    return this.articleModel.count();
  }
}
