import express from 'express'

const router = express.Router()

router.get('/user', (req, res) => {
  res.send('User Routes')
})

export default router
