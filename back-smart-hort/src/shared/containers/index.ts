import { container } from 'tsyringe'

import IStreetMarcketsRepository from '@modules/streetmarcket/repositories/IStreetMarckets.repository'
import StreetMarcketsRepository from '@modules/streetmarcket/infra/typeorm/repositories/StreetMarcket.repository'

import IUsersRepository from '@modules/users/repositories/UsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/Users.repository'

container.registerSingleton<IStreetMarcketsRepository>(
  'StreetMarcketsRepository',
  StreetMarcketsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
