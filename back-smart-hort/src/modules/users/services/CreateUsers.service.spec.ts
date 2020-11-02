import 'reflect-metadata'

import AppError from '@shared/errors/AppErrors'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import CreateUserService from './CreateUsers.service'

let fakeUsersRepository: FakeUsersRepository
let createUser: CreateUserService

const createUserMock: ICreateUserDTO = {
  name: 'name',
  email: 'email@email.com',
  password: 'password',
}

describe('CreateUsersService()', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository()

    createUser = new CreateUserService(fakeUsersRepository)
  })

  it('should be able to create a new user', async () => {
    const user = await createUser.run(createUserMock)

    expect(user).toHaveProperty('id')
  })

  it('not should be able to create a new user with same address', async () => {
    await createUser.run(createUserMock)

    expect(createUser.run(createUserMock)).rejects.toBeInstanceOf(AppError)
  })

  it('not should be able to create a new user without an address', async () => {
    delete createUserMock.address

    expect(createUser.run(createUserMock)).rejects.toBeInstanceOf(AppError)
  })
})
