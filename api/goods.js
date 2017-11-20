import express from 'express'

import Goods from '../controllers/goods'
import GoodsType from '../controllers/goodsType'

const router = express.Router()

router.route('/')
  .get(Goods.getList)

router.route('/types')
  .get(GoodsType.getTypes)

export default router
