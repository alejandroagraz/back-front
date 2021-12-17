import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RemoveArticleType {
  @Field()
  readonly response: string;
}
