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
    this.getType = this.getType.bind(this)
    this.getTypeList = this.getTypeList.bind(this)
    this.addType = this.addType.bind(this)
    this.deleteType = this.deleteType.bind(this)
    this.updateType = this.updateType.bind(this)
  }

  async getType (req, res, next) {
    let params = req.params
    return this.getOne(GoodsTypeModel, res, params)
  }

  async getTypeList (req, res, next) {
    return this.getList(GoodsTypeModel, res, req.query)
  }

  async addType (req, res, next) {
    let params = req.body
    if (!params || this.isEmptyObject(params)) {
      return this.baseResponse(res, ERR_PARAMS_NOT_EXIST)
    }

    let matchParams = {
      value: params.value
    }
    return this.addOne(GoodsTypeModel, res, params, matchParams)
  }

  async deleteType (req, res, next) {
    return this.deleteOne(GoodsTypeModel, res, req.params)
  }

  async updateType (req, res, next) {
    return this.updateOne(GoodsTypeModel, res, req.body)
  }
}

export default new GoodsType()
