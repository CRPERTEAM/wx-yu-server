import express from 'express'; // expresss

import Goods from '../controllers/goods'; //接口实现

const router = express.Router(); // 路由初始化

router.route('/')
  .get(Goods.getGoodsList)
  .post(Goods.addGoods)
  .patch(Goods.updateGoods)

router.route('/:id')
  .get(Goods.getGoods)
  .delete(Goods.deleteGoods)

export default router
