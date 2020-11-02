import { getRepository, Repository } from 'typeorm'
import IUserRepository from '@modules/users/repositories/UsersRepository'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import User from '../entities/User'

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async findAll(): Promise<User[] | undefined> {
    const users = await this.ormRepository.find()
    return users
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const users = await this.ormRepository.findOne({ where: { email } })
    return users
  }

  public async findById(id: string): Promise<User | undefined> {
    const users = await this.ormRepository.findOne({ where: { id } })
    return users
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user)
    return user
  }

  public async save(user: User): Promise<User> {
    const userSaved = await this.ormRepository.save(user)
    return userSaved
  }
}

export default UsersRepository
