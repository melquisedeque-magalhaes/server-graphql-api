import { Field, InputType } from 'type-graphql'

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string

  @Field(() => String)
  description: string
}
