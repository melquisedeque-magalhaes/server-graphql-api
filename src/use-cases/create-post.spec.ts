import { describe, it, expect } from 'vitest'
import { InMemoryPostRepository } from '../repositories/in-memory/in-memory-post-repository'
import { CreatePostUseCase } from './create-post'

describe('Create Post Use Case', () => {
  it('should be able create a post', async () => {
    const postRepository = new InMemoryPostRepository()

    const createPostUseCase = new CreatePostUseCase(postRepository)

    const { post } = await createPostUseCase.execute({
      title: 'Test Post',
      description: 'Test Description',
    })

    expect(post.id).toEqual(expect.any(String))
  })
})
