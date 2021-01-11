import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import configAuth from '../../../../config/auth'

import AppError from '../../../errors/AppErrors'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('Authentication error')
  }

  const [, token] = authHeader?.split(' ')

  const decoded = verify(token, configAuth.jwt.secret)

  const { sub } = decoded as TokenPayload

  req.user = {
    id: sub,
  }

  return next()
}
