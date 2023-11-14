import { Post, PostRepository } from '../repositories/post-repository'

interface ListPostUseCaseResponse {
  posts: Post[]
}

export class ListPostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(): Promise<ListPostUseCaseResponse> {
    const posts = await this.postRepository.listAll()

    return {
      posts,
    }
  }
}
