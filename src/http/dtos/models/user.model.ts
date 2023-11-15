import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  email: string

  @Field(() => String)
  password: string

  @Field(() => Date)
  createdAt: Date
}
