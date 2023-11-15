import { GraphQLError } from 'graphql'
import { ExtensionsErrorsEnum } from '../../typings/extensions-erros'

export class UserAlrealdyExistsError extends GraphQLError {
  constructor() {
    super('E-mail alrealdy exists', {
      extensions: {
        code: ExtensionsErrorsEnum.USER_ALREALDY_EXISTS,
      },
    })
  }
}
