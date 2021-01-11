import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '@config/upload'

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'

import UsersController from '../controllers/UsersController'
import UserAvatarControler from '../controllers/UserAvatarControler'

const userController = new UsersController()
const userAvatarControler = new UserAvatarControler()
const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.get('/', userController.read)

usersRouter.post('/', userController.create)

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarControler.update,
)

export default usersRouter
