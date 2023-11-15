import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string

  @Field(() => String)
  email: string

  @Field(() => String)
  password: string
}
