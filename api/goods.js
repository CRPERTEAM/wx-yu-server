import express from 'express'

import Goods from '../controllers/goods'

const router = express.Router()

router.route('/')
  .get(Goods.getGoodsList)
  .post(Goods.addGoods)
  .patch(Goods.updateGoods)

router.route('/:id')
  .get(Goods.getGoods)
  .delete(Goods.deleteGoods)

export default router
