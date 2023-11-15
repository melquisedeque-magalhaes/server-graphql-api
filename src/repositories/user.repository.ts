export interface CreateUserInput {
  name: string
  email: string
  passwordHash: string
}

export interface User {
  id: string
  name: string
  email: string
  createdAt: string | Date
}

export interface UserRepository {
  create: (data: CreateUserInput) => Promise<User>
  findByEmail: (email: string) => Promise<User | null>
}
