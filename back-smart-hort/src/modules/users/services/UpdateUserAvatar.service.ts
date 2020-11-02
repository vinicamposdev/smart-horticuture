import path from 'path'
import fs from 'fs'
import { injectable, inject } from 'tsyringe'

import IUsersRepository from '@modules/users/infra/typeorm/repositories/Users.repository'

import uploadConfig from '../../../config/upload'

import AppError from '../../../shared/errors/AppErrors'

import User from '../infra/typeorm/entities/User'

interface IRequest {
  // eslint-disable-next-line camelcase
  user_id: string
  avatarFilename: string
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  // eslint-disable-next-line camelcase
  public async run({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401)
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarExists = await fs.promises.stat(userAvatarFilePath)

      if (userAvatarExists) {
        fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFilename

    await this.usersRepository.save(user)

    delete user.password

    return user
  }
}

export default UpdateUserAvatarService
