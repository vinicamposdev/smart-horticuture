import { getRepository, Repository, DeepPartial } from 'typeorm'
import IStreetMarcketRepository from '@modules/streetmarcket/repositories/IStreetMarckets.repository'
import ICreateStreetMarcketDTO from '@modules/streetmarcket/dtos/ICreateStreetMarcketDTO'
import StreetMarcket from '@modules/streetmarcket/infra/typeorm/entities/StreetMarcket'

interface IRequest {
  address: string
}
class StreetMarcketsRepository implements IStreetMarcketRepository {
  private ormRepository: Repository<StreetMarcket>

  constructor() {
    this.ormRepository = getRepository(StreetMarcket)
  }

  public async find(): Promise<StreetMarcket[]> {
    const streemarcket = await this.ormRepository.find()

    return streemarcket
  }

  public async findById(id: string): Promise<StreetMarcket | undefined> {
    const immobile = await this.ormRepository.findOne({
      where: { id },
    })
    return immobile
  }

  public async filter(data: IRequest): Promise<StreetMarcket[]> {
    const streemarcket = await this.ormRepository.find({
      where: { address: data.address },
    })

    return streemarcket
  }

  public async create(data: ICreateStreetMarcketDTO): Promise<any> {
    const immobile = this.ormRepository.create(data as any) // TODO Work around DeepPartial type issue. See typeorm/issues/2904 for more
    await this.ormRepository.save(immobile)
    return immobile
  }

  public async save(immobile: StreetMarcket): Promise<StreetMarcket> {
    const immobileSaved = await this.ormRepository.save(immobile)
    return immobileSaved
  }
}

export default StreetMarcketsRepository
