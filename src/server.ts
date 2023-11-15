import 'reflect-metadata'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchemaSync } from 'type-graphql'
import { ApolloServerErrorCode } from '@apollo/server/errors'
import path from 'node:path'

import { PostResolver } from './http/resolvers/post-resolver'
import { UserResolver } from './http/resolvers/user-resolver'
import { ZodError } from 'zod'
import { GraphQLError } from 'graphql'

async function bootstrap() {
  const schema = buildSchemaSync({
    resolvers: [PostResolver, UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
    formatError: (formattedError, error) => {
      const originalError = error?.originalError

      if (originalError instanceof ZodError) {
        throw new GraphQLError(originalError.errors[0].message, {
          path: originalError.errors[0].path,
          extensions: {
            code: ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED,
          },
        })
      }

      return formattedError
    },
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀 Application run on ${url}`)
}

bootstrap()
