import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class ArticleType {
  @Field(() => ID)
  _id: string;

  @Field({ nullable: true })
  readonly story_title: string;

  @Field({ nullable: true })
  readonly title: string;

  @Field({ nullable: true })
  readonly story_url: string;

  @Field({ nullable: true })
  readonly author: string;

  @Field(() => GraphQLISODateTime)
  readonly created_at: string;
}
