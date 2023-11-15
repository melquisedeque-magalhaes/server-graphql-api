import { Arg, Mutation, Resolver } from 'type-graphql'
import { ZodError, z } from 'zod'

import { User } from '../dtos/models/user.model'
import { CreateUserInput } from '../dtos/inputs/create-user-input'
import { PrismaUserRepository } from '../../repositories/prisma/prisma-user-repository'
import { CreateUserUseCase } from '../../use-cases/create-user'

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg('data', () => CreateUserInput) data: CreateUserInput) {
    const createUserSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { email, name, password } = createUserSchema.parse(data)

    const userRepository = new PrismaUserRepository()

    const createUserUseCase = new CreateUserUseCase(userRepository)

    const user = createUserUseCase.execute({ email, name, password })

    return user
  }
}
