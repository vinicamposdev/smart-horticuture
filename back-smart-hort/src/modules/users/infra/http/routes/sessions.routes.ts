import { Router } from 'express'

import SessionsControler from '@modules/users/infra/http/controllers/SessionsControler'

const sessionsRouter = Router()
const sessionsControler = new SessionsControler()

sessionsRouter.post('/', sessionsControler.create)

export default sessionsRouter
