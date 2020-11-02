import { Request, Response } from 'express'
import { container } from 'tsyringe'

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatar.service'

export default class UserAvatarControler {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService)

    const user = await updateUserAvatar.run({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    })

    return res.status(200).json(user)
  }
}
