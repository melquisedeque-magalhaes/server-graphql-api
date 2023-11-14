import { prisma } from '../../lib/prisma'
import { Post, PostInput, PostRepository } from '../post-repository'

export class PostPrismaRepository implements PostRepository {
  async create(data: PostInput): Promise<Post> {
    const post = await prisma.post.create({
      data,
    })

    return post
  }

  async listAll(): Promise<Post[]> {
    const posts = await prisma.post.findMany()

    return posts
  }
}
