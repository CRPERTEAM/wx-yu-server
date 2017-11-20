import Base from './base'
import GoodsTypeModel from '../models/goodsType'
import {
  ERR_SUCCESS,
  ERR_FAILED,
  ERR_PARAMS_NOT_EXIST
} from '../utils/errResponse'

class GoodsType extends Base {
  constructor () {
    super()
    this.getTypes = this.getTypes.bind(this)
  }

  async getTypes (req, res, next) {
    return this.baseResponse(res, ERR_SUCCESS('商品类型获取成功'))
  }
}

export default new GoodsType()
