import { hash } from 'bcryptjs'
import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppErrors'

import IUsersRepository from '@modules/users/infra/typeorm/repositories/Users.repository'
import User from '../infra/typeorm/entities/User'

interface IRequestDTO {
  name: string
  email: string
  password: string
}

/**
 * Creating User Busines Rule
 * @param {string} email
 * @author Vinicius Campos
 */

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async run({ name, email, password }: IRequestDTO): Promise<User> {
    const checkUserExistence = await this.usersRepository.findByEmail(email)

    if (checkUserExistence) {
      throw new AppError('Email is needed!')
    }

    const hashedPassword = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    return user
  }
}

export default CreateUserService
