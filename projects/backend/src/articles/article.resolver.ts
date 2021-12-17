import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleType } from './dto/create-article.dto';
import { JwtAuthGuard } from '../auths/guards/jwt-auth.guard';
import { RemoveInput } from './inputs/remove.input';
import { RemoveArticleType } from './dto/remove-article.dto';
import { GraphQLError } from 'graphql';

@Resolver()
export class ArticleResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(() => [ArticleType])
  @UseGuards(JwtAuthGuard)
  async getArticle() {
    return this.articlesService.find({ deleted: 0 });
  }

  @Mutation(() => [ArticleType])
  @UseGuards(JwtAuthGuard)
  async removeArticle(@Args('input') input: RemoveInput) {
    const { _id } = input;
    const deleted = await this.articlesService.findByIdAndUpdate(_id, {
      deleted: 1,
    });
    if (deleted) {
      return this.articlesService.find({ deleted: 0 });
    } else {
      throw new GraphQLError('Deleted article failed!');
    }
  }
}
