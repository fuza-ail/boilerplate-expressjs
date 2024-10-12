import express from 'express'
const router = express.Router()

import userRouter from './userRouter'

router.use(userRouter)

export default router
