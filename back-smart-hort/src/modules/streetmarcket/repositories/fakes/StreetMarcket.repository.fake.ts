import { uuid } from 'uuidv4'

import IStreetMarcketRepository from '@modules/streetmarcket/repositories/IStreetMarckets.repository'
import ICreateStreetMarcketDTO from '@modules/streetmarcket/dtos/ICreateStreetMarcketDTO'
import StreetMarcket from '@modules/streetmarcket/infra/typeorm/entities/StreetMarcket'
import AppError from '@shared/errors/AppErrors'

interface IRequest {
  address: string
}
class StreetMarcketsRepository implements IStreetMarcketRepository {
  private streemarcket: StreetMarcket[] = []

  public async find(): Promise<StreetMarcket[]> {
    return this.streemarcket
  }

  public async findById(id: string): Promise<StreetMarcket | undefined> {
    const immobile = this.streemarcket.find(i => i.id === id)

    return immobile
  }

  public async filter(data: IRequest): Promise<StreetMarcket[]> {
    const immobileFiltered = this.streemarcket.find(
      i => i.address === data.address,
    )

    const immobile = []
    if (immobileFiltered) immobile.push(immobileFiltered)

    return immobile
  }

  public async create(data: ICreateStreetMarcketDTO): Promise<StreetMarcket> {
    const immobile = new StreetMarcket()
    const { address } = data

    if (
      !!this.streemarcket.find(i => i.address === address) &&
      this.streemarcket.length !== 0
    ) {
      throw new AppError('Address must be unique')
    }

    Object.assign(immobile, { ...data, id: uuid() })

    this.streemarcket.push(immobile)

    return immobile
  }

  public async save(data: ICreateStreetMarcketDTO): Promise<StreetMarcket> {
    const immobile = new StreetMarcket()

    Object.assign(immobile, { ...data, id: uuid() })

    const { address } = data

    if (!this.streemarcket.find(i => i.address === address)) {
      throw new AppError('Address must be unique')
    }

    this.streemarcket.push(immobile)

    return immobile
  }
}

export default StreetMarcketsRepository
