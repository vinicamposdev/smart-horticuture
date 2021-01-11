import 'reflect-metadata'

import AppError from '@shared/errors/AppErrors'
import ICreateStreetMarcketDTO from '@modules/streetmarcket/dtos/ICreateStreetMarcketDTO'
import FakeStreetMarcketsRepository from '../repositories/fakes/StreetMarcket.repository.fake'
import CreateStreetMarcketService from './CreateStreetMarckets.service'

let fakeStreetMarcketsRepository: FakeStreetMarcketsRepository
let createStreetMarcket: CreateStreetMarcketService

const createStreetMarcketMock: ICreateStreetMarcketDTO = {
  address: 'a',
  user_id: 'a',
  delivery_time: 2*60*60
}

describe('CreateStreetMarcketsService', () => {
  beforeEach(() => {
    fakeStreetMarcketsRepository = new FakeStreetMarcketsRepository()

    createStreetMarcket = new CreateStreetMarcketService(fakeStreetMarcketsRepository)
  })

  it('should be able to create a new immobile', async () => {
    const immobile = await createStreetMarcket.run(createStreetMarcketMock)

    expect(immobile).toHaveProperty('id')
  })

  it('not should be able to create a new immobile with same address', async () => {
    await createStreetMarcket.run(createStreetMarcketMock)

    expect(createStreetMarcket.run(createStreetMarcketMock)).rejects.toBeInstanceOf(
      AppError,
    )
  })
})
