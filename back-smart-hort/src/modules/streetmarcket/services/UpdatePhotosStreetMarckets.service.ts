/* eslint-disable camelcase */
import path from 'path'
import fs from 'fs'
import { inject, injectable } from 'tsyringe'

import uploadConfig from '../../../config/upload'

import StreetMarcket from '../infra/typeorm/entities/StreetMarcket'
import IStreetMarcketsRepository from '../repositories/IStreetMarckets.repository'

import AppError from '../../../shared/errors/AppErrors'

interface IRequest {
  street_marcket_id: string
  photo_1: string
  photo_2: string
}

@injectable()
class UpdatePhotosStreetMarckets {
  constructor(
    @inject('StreetMarcketsRepository')
    private streemarcketRepository: IStreetMarcketsRepository,
  ) {}

  public async run({
    street_marcket_id,
    photo_1,
    photo_2,
  }: IRequest): Promise<StreetMarcket> {
    const streetMarcket = await this.streemarcketRepository.findById(street_marcket_id)
    if (!streetMarcket) {
      throw new AppError('StreetMarcket must exist', 400)
    }

    if (streetMarcket.photo_1) {
      const streetMarcketPhoto1FilePath = path.join(
        uploadConfig.directory,
        streetMarcket.photo_1,
      )
      const streetMarcketPhoto1Exists = await fs.promises.stat(
        streetMarcketPhoto1FilePath,
      )

      if (streetMarcketPhoto1Exists) {
        fs.promises.unlink(streetMarcketPhoto1FilePath)
      }
    }

    if (streetMarcket.photo_2) {
      const streetMarcketPhoto1FilePath = path.join(
        uploadConfig.directory,
        streetMarcket.photo_2,
      )
      const streetMarcketPhoto1Exists = await fs.promises.stat(
        streetMarcketPhoto1FilePath,
      )

      if (streetMarcketPhoto1Exists) {
        fs.promises.unlink(streetMarcketPhoto1FilePath)
      }
    }

    streetMarcket.photo_1 = photo_1
    streetMarcket.photo_2 = photo_2

    await this.streemarcketRepository.save(streetMarcket)

    return streetMarcket
  }
}

export default UpdatePhotosStreetMarckets
