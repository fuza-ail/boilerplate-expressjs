import { Router } from 'express'
const router = Router()

import userRouter from './userRoute'

router.use(userRouter)

export default router
