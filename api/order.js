import express from 'express'

import Order from '../controllers/order'

const router = express.Router()

router.route('/')
  .get(Order.getOrderList)
  .post(Order.addOrder)
  .patch(Order.updateOrder)

router.route('/:id')
  .get(Order.getOrder)
  .delete(Order.deleteOrder)

export default router
