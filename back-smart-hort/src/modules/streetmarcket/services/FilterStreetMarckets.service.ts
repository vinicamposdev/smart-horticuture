import { inject, injectable } from 'tsyringe'

import StreetMarcket from '../infra/typeorm/entities/StreetMarcket'
import IStreetMarcketsRepository from '../repositories/IStreetMarckets.repository'

interface IRequest {
  address: string
}

@injectable()
class FilterStreetMarckets {
  constructor(
    @inject('StreetMarcketsRepository')
    private streemarcketRepository: IStreetMarcketsRepository,
  ) {}

  public async run({ address }: IRequest): Promise<StreetMarcket[] | undefined> {
    const immobile = await this.streemarcketRepository.filter({ address })

    return immobile
  }
}

export default FilterStreetMarckets
