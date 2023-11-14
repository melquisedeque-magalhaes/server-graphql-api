import { Post, PostRepository } from '../repositories/post-repository'

interface CreatePostUseCaseRequest {
  title: string
  description: string
}

interface CreatePostUseCaseResponse {
  post: Post
}

export class CreatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute({
    description,
    title,
  }: CreatePostUseCaseRequest): Promise<CreatePostUseCaseResponse> {
    const post = await this.postRepository.create({
      title,
      description,
    })

    return {
      post,
    }
  }
}
