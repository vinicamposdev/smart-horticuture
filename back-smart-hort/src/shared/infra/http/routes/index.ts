import { Router } from 'express'
import streetmarcketRouter from '@modules/streetmarcket/infra/http/routes/streetmarcket.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'

const routes = Router()

routes.use('/street-marckets', streetmarcketRouter)
routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
