import express from 'express'
import Users from '../controllers/users'

const router = express.Router()

router.route('/')
  .get(Users.getUserinfo)

router.route('/fav')
  .get(Users.getUserFav)

export default router
