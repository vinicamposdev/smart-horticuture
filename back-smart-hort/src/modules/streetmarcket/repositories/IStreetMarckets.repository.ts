import StreetMarcket from '../infra/typeorm/entities/StreetMarcket'
import ICreateStreetMarcketDTO from '../dtos/ICreateStreetMarcketDTO'

interface IRequest {
  address: string
}

export default interface IStreetMarcketsRepository {
  find(): Promise<StreetMarcket[] | undefined>
  findById(id: string): Promise<StreetMarcket | undefined>
  filter(data: IRequest): Promise<StreetMarcket[] | undefined>
  create(date: ICreateStreetMarcketDTO): Promise<StreetMarcket>
  save(user: StreetMarcket): Promise<StreetMarcket>
}
