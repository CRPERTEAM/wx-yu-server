import express from 'express'
import GoodsType from '../controllers/goodsType'

const router = express.Router()
router.route('/')
  .get(GoodsType.getTypes)
  .post(GoodsType.addType)
  .delete(GoodsType.deleteType)

export default router
