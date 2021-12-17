import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RemoveInput {
  @Field()
  _id: string;
}
