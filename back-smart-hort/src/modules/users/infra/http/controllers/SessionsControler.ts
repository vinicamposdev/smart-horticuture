import { Request, Response } from 'express'
import { container } from 'tsyringe'

import AuthenticateUserService from '@modules/users/services/AuthenticateUser.service'

export default class SessionsControler {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body

    const authenticateUser = container.resolve(AuthenticateUserService)

    const { user, token } = await authenticateUser.run({
      email,
      password,
    })

    return res.json({
      user: { id: user.id, name: user.name, email: user.email },
      token,
    })
  }
}
