import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { injectable, inject } from 'tsyringe'

import IUsersRepository from '@modules/users/infra/typeorm/repositories/Users.repository'

import configAuth from '../../../config/auth'

import AppError from '../../../shared/errors/AppErrors'

import User from '../infra/typeorm/entities/User'

/**
 * Creating Sessions Busines Rule
 * @param {string} email
 * @author Vinicius Campos
 */

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async run({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401)
    }

    const { secret, expiresIn } = configAuth.jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService
