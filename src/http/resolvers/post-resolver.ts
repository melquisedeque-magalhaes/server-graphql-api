import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { z } from 'zod'

import { Post } from '../dtos/models/post-model'
import { CreatePostInput } from '../dtos/inputs/create-post-input'
import { CreatePostUseCase } from '../../use-cases/create-post'
import { ListPostUseCase } from '../../use-cases/list-posts'
import { PostPrismaRepository } from '../../repositories/prisma/prisma-post-repository'

@Resolver(Post)
export class PostResolver {
  @Query(() => [Post], { nullable: true })
  async posts() {
    try {
      const postRepository = new PostPrismaRepository()

      const listPostUseCase = new ListPostUseCase(postRepository)

      const { posts } = await listPostUseCase.execute()

      return posts
    } catch (err) {
      console.log('err', err)
    }
  }

  @Mutation(() => Post, { nullable: true })
  async createPost(@Arg('data', () => CreatePostInput) data: CreatePostInput) {
    try {
      const createPostSchema = z.object({
        title: z.string(),
        description: z.string(),
      })

      const { description, title } = createPostSchema.parse(data)

      const postRepository = new PostPrismaRepository()

      const createPostUseCase = new CreatePostUseCase(postRepository)

      const { post } = await createPostUseCase.execute({
        description,
        title,
      })

      return post
    } catch (err) {
      console.log('err', err)
    }
  }
}
