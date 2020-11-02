import { inject, injectable } from 'tsyringe'

import StreetMarcket from '../infra/typeorm/entities/StreetMarcket'
import IStreetMarcketsRepository from '../repositories/IStreetMarckets.repository'

@injectable()
class ReadStreetMarckets {
  constructor(
    @inject('StreetMarcketsRepository')
    private streemarcketRepository: IStreetMarcketsRepository,
  ) {}

  public async run(): Promise<StreetMarcket[] | undefined> {
    const immobile = await this.streemarcketRepository.find()

    return immobile
  }
}

export default ReadStreetMarckets
