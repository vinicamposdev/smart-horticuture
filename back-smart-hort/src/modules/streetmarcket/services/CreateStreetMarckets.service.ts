/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe'

import StreetMarcket from '../infra/typeorm/entities/StreetMarcket'
import IStreetMarcketsRepository from '../repositories/IStreetMarckets.repository'

import AppError from '../../../shared/errors/AppErrors'

import ICreateStreetMarcketDTO from '../dtos/ICreateStreetMarcketDTO'

@injectable()
class CreateStreetMarckets {
  constructor(
    @inject('StreetMarcketsRepository')
    private streemarcketRepository: IStreetMarcketsRepository,
  ) {}

  public async run(data: ICreateStreetMarcketDTO): Promise<StreetMarcket> {
    if (!data.address) {
      throw new AppError('Address is needed!')
    }

    const immobile = this.streemarcketRepository.create(data)
    return immobile
  }
}

export default CreateStreetMarckets
