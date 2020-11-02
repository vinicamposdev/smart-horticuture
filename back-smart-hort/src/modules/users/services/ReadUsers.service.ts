import { injectable, inject } from 'tsyringe'

import IUsersRepository from '@modules/users/infra/typeorm/repositories/Users.repository'
import User from '@modules/users/infra/typeorm/entities/User'

@injectable()
class ReadUsers {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async run(): Promise<User[] | undefined> {
    const immobile = await this.usersRepository.findAll()

    return immobile
  }
}

export default ReadUsers
