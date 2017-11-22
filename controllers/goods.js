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
    return this.getList(GoodsModel, req.query, res)
  }
}

export default new Goods()
