import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryPostRepository } from '../repositories/in-memory/in-memory-post-repository'
import { ListPostUseCase } from './list-posts'
import { CreatePostUseCase } from './create-post'

let postRepository: InMemoryPostRepository
let createPostUseCase: CreatePostUseCase
let listPostUseCase: ListPostUseCase

describe('List Use Case', () => {
  beforeEach(() => {
    postRepository = new InMemoryPostRepository()

    createPostUseCase = new CreatePostUseCase(postRepository)

    listPostUseCase = new ListPostUseCase(postRepository)
  })
  it('should be able list all posts', async () => {
    createPostUseCase.execute({
      title: 'test-post-1',
      description: 'test-description',
    })

    createPostUseCase.execute({
      title: 'test-post-1',
      description: 'test-description',
    })

    const { posts } = await listPostUseCase.execute()

    expect(posts.length).toEqual(2)
  })
})
