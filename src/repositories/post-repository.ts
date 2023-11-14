export interface PostInput {
  title: string
  description: string
}

export interface Post {
  id: string | undefined
  title: string
  description: string
  createdAt: string | Date | undefined
}

export interface PostRepository {
  create(data: PostInput): Promise<Post>
  listAll(): Promise<Post[]>
}
