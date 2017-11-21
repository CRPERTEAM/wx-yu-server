import express from 'express'

import Goods from '../controllers/goods'

const router = express.Router()

router.route('/')
  .get(Goods.getList)

export default router
