import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateUserService from '@modules/users/services/CreateUsers.service'
import ReadUsersService from '@modules/users/services/ReadUsers.service'

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const createUser = container.resolve(CreateUserService)

    const user = await createUser.run({ name, email, password })

    return res.status(200).json({ ...user, password: undefined })
  }

  public async read(req: Request, res: Response): Promise<Response> {
    const readUser = container.resolve(ReadUsersService)
    const users = await readUser.run()
    return res.json(users)
  }
}
