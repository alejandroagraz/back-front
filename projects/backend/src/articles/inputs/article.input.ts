import { InputType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';

@InputType()
export class ArticleInput {
  @Field()
  story_title: string;

  @Field()
  title: string;

  @Field()
  story_url: string;

  @Field()
  author: string;

  @Field(() => GraphQLISODateTime)
  created_at: string;
}
