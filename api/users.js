import express from 'express'
import Users from '../controllers/users'

const router = express.Router()

router.route('/')
  .get(Users.getUserinfo)

export default router
