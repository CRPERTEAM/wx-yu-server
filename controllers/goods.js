import Base from './base'
import GoodsModel from '../models/goods'
import {
  ERR_SUCCESS,
  ERR_FAILED,
  ERR_PARAMS_NOT_EXIST
} from '../utils/errResponse'

class Goods extends Base {
  constructor () {
    super()
    this.getList = this.getList.bind(this)
  }

  async getList (req, res, next) {
    return this.baseResponse(res, ERR_SUCCESS('商品列表获取成功'))
  }
}

export default new Goods()
