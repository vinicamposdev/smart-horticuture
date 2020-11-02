/* eslint-disable camelcase */
import path from 'path'
import fs from 'fs'
import { inject, injectable } from 'tsyringe'

import uploadConfig from '../../../config/upload'

import StreetMarcket from '../infra/typeorm/entities/StreetMarcket'
import IStreetMarcketsRepository from '../repositories/IStreetMarckets.repository'

import AppError from '../../../shared/errors/AppErrors'

interface IRequest {
  immobile_id: string
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
    immobile_id,
    photo_1,
    photo_2,
  }: IRequest): Promise<StreetMarcket> {
    const immobile = await this.streemarcketRepository.findById(immobile_id)
    if (!immobile) {
      throw new AppError('StreetMarcket must exist', 400)
    }

    if (immobile.photo_1) {
      const immobilePhoto1FilePath = path.join(
        uploadConfig.directory,
        immobile.photo_1,
      )
      const immobilePhoto1Exists = await fs.promises.stat(
        immobilePhoto1FilePath,
      )

      if (immobilePhoto1Exists) {
        fs.promises.unlink(immobilePhoto1FilePath)
      }
    }

    if (immobile.photo_2) {
      const immobilePhoto1FilePath = path.join(
        uploadConfig.directory,
        immobile.photo_2,
      )
      const immobilePhoto1Exists = await fs.promises.stat(
        immobilePhoto1FilePath,
      )

      if (immobilePhoto1Exists) {
        fs.promises.unlink(immobilePhoto1FilePath)
      }
    }

    immobile.photo_1 = photo_1
    immobile.photo_2 = photo_2

    await this.streemarcketRepository.save(immobile)

    return immobile
  }
}

export default UpdatePhotosStreetMarckets
