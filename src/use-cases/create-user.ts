import { hash } from 'bcryptjs'

import { UserRepository } from '../repositories/user.repository'
import { UserAlrealdyExistsError } from './errors/user-alrealdy-exists-error'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: CreateUserUseCaseRequest) {
    const isUserAlrealdy = await this.userRepository.findByEmail(email)

    if (isUserAlrealdy) {
      throw new UserAlrealdyExistsError()
    }

    const passwordHash = await hash(password, 6)

    const user = this.userRepository.create({ email, name, passwordHash })

    return user
  }
}
