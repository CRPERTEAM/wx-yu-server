import express from 'express'
import GoodsType from '../controllers/goods-type'

const router = express.Router()
router.route('/')
  .get(GoodsType.getTypeList)
  .post(GoodsType.addType)
  .patch(GoodsType.updateType)

router.route('/:id')
  .get(GoodsType.getType)
  .delete(GoodsType.deleteType)

export default router
