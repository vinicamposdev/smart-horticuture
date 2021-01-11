import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'

import StreetMarcketsControler from '../controllers/StreetMarcketControler'
import StreetMarcketsPhotosControler from '../controllers/StreetMarcketPhotosControler'

const upload = multer(uploadConfig)

const streemarcketRouter = Router()

const streemarcketControler = new StreetMarcketsControler()
const streemarcketPhotosControler = new StreetMarcketsPhotosControler()

streemarcketRouter.get('/', streemarcketControler.read)

streemarcketRouter.use(ensureAuthenticated)

streemarcketRouter.post('/filter', streemarcketControler.filter)

streemarcketRouter.post('/', streemarcketControler.create)

streemarcketRouter.patch(
  '/photos',
  upload.array('photos', 2),
  streemarcketPhotosControler.update,
)

export default streemarcketRouter
