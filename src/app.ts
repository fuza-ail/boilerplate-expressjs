import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './api-docs.json'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'

import router from './routers'

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
})
const corsOption = {
  origin: ['http://localhost:8000', 'http://localhost:3000'],
  credentials: true,
}

// middleware
app.use(limiter)
app.use(helmet())
app.use(morgan('combined'))
app.use(cookieParser())
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())

// router
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.get('/api-docs', swaggerUi.setup(swaggerDocs))

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
