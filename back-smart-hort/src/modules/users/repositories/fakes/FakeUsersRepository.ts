import IUsersRepository from '@modules/users/repositories/UsersRepository'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import User from '@modules/users/infra/typeorm/entities/User'
import { uuid } from 'uuidv4'

class UsersRepository implements IUsersRepository {
  private users: User[] = []

  public async findAll(): Promise<User[] | undefined> {
    return this.users
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(u => u.email === email)
    return user
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(u => u.id === id)
    return user
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, data)

    this.users.push(user)

    return user
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(u => u.id === user.id)

    this.users[findIndex] = user

    return user
  }
}

export default UsersRepository
