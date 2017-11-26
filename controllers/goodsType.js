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
    let jsonData = await this.getOne(GoodsTypeModel, req.params)
    return res.json(jsonData)
  }

  async getTypeList (req, res, next) {
    let jsonData = await this.getList(GoodsTypeModel, req.query)
    return res.json(jsonData)
  }

  async addType (req, res, next) {
    let params = req.body
    let jsonData = {}

    if (!params || this.isEmptyObject(params)) {
      jsonData = this.jsonData(ERR_PARAMS_NOT_EXIST)
      return res.json(jsonData)
    }

    let matchParams = {
      value: params.value
    }
    jsonData = await this.addOne(GoodsTypeModel, params, matchParams)
    return res.json(jsonData)
  }

  async deleteType (req, res, next) {
    let jsonData = await this.deleteOne(GoodsTypeModel, req.params)
    return res.json(jsonData)
  }

  async updateType (req, res, next) {
    let jsonData = await this.updateOne(GoodsTypeModel, req.body)
    return res.json(jsonData)
  }
}

export default new GoodsType()
