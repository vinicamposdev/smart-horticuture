/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe'

import UpdatePhotosStreetMarcketService from '@modules/streetmarcket/services/UpdatePhotosStreetMarckets.service'

export default class StreetMarcketsPhotosControler {
  public async update(req: Request, res: Response): Promise<Response> {
    const { street_marcket_id } = req.body

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[]
    }
    const extractPhoto = (
      file: any,
      i: number,
    ) => {
      return file.filter((f:any) => f.fieldname === 'photos')[i].filename // TODO: Work around this Multer type issue
    }

    const photo1 = extractPhoto(files, 0)
    const photo2 = extractPhoto(files, 1)

    const createStreetMarcket = container.resolve(UpdatePhotosStreetMarcketService)
    const streetMarcket = await createStreetMarcket.run({
      street_marcket_id,
      photo_1: photo1,
      photo_2: photo2,
    })

    return res.json(streetMarcket)
  }
}
