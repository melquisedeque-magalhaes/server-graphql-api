import 'reflect-metadata'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchemaSync } from 'type-graphql'
import path from 'node:path'

import { PostResolver } from './http/resolvers/post-resolver'

async function bootstrap() {
  const schema = buildSchemaSync({
    resolvers: [PostResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({ schema })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀 Application run on ${url}`)
}

bootstrap()
