import { randomUUID } from 'node:crypto'
import { Post, PostInput, PostRepository } from '../post-repository'

export class InMemoryPostRepository implements PostRepository {
  public posts: Post[] = []

  async create(data: PostInput): Promise<Post> {
    const post = {
      id: randomUUID(),
      title: data.title,
      description: data.description,
      createdAt: new Date(),
    }

    this.posts.push(post)

    return post
  }

  async listAll(): Promise<Post[]> {
    return this.posts
  }
}
