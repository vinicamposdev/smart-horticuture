import 'reflect-metadata'

import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'

import uploadConfig from '@config/upload'
import AppError from '@shared/errors/AppErrors'
import routes from './routes'

import '@shared/infra/typeorm'
import '@shared/containers/index'

const app = express()

// Enable outside web request to api
app.use(cors())

// Allow express to recognize json requests
app.use(express.json())

// Route for serving static files
app.use('/files', express.static(uploadConfig.directory))

// Express routes
app.use(routes)

// Global Handling Application Error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message })
  }
  // eslint-disable-next-line no-console
  console.error(err)
  return res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started')
})
