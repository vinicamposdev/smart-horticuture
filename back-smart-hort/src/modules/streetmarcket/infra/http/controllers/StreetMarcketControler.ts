import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateStreetMarcketService from '@modules/streetmarcket/services/CreateStreetMarckets.service'
import ReadStreetMarcketService from '@modules/streetmarcket/services/ReadStreetMarckets.service'
import FilterStreetMarcketService from '@modules/streetmarcket/services/FilterStreetMarckets.service'

export default class StreetMarcketController {
  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body.user_id
      ? req.body
      : { ...req.body, user_id: req.user.id }

    const createStreetMarcket = container.resolve(CreateStreetMarcketService)

    const immobile = await createStreetMarcket.run(data)

    return res.json(immobile)
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const readStreetMarcket = container.resolve(ReadStreetMarcketService)

    const streetmarcket = await readStreetMarcket.run()
    return res.json(streetmarcket)
  }

  public async filter(req: Request, res: Response): Promise<Response> {
    const filterStreetMarcket = container.resolve(FilterStreetMarcketService)
    const { address } = req.body
    const streetmarcket = await filterStreetMarcket.run({ address })
    return res.json(streetmarcket)
  }
}
