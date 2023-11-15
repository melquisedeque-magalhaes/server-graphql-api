import { prisma } from '../../lib/prisma'
import { CreateUserInput, User, UserRepository } from '../user.repository'

export class PrismaUserRepository implements UserRepository {
  async create(data: CreateUserInput): Promise<User> {
    const userResponse = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password_hash: data.passwordHash,
      },
    })

    const user = {
      id: userResponse.id,
      name: userResponse.name,
      email: userResponse.email,
      createdAt: userResponse.createdAt,
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const userResponse = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userResponse) {
      const user = {
        id: userResponse.id,
        name: userResponse.name,
        email: userResponse.email,
        createdAt: userResponse.createdAt,
      }

      return user
    }

    return null
  }
}
