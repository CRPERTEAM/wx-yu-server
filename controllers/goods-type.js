import Base from './base'; // 引入接口实现的基类
import GoodsTypeModel from '../models/goods-type'
import { isEmptyObject, jsonData } from '../utils/common'
import {
  ERR_SUCCESS,
  ERR_FAILED,
  ERR_PARAMS_NOT_EXIST
} from '../utils/errResponse'

class GoodsType extends Base {
  constructor () {
    super()
  }


  // 获取类型
  async getType (req, res, next) {
    let jsonData = await super.getOne(GoodsTypeModel, req.params)
    return res.json(jsonData)
  }

  // 获取类型列表
  async getTypeList (req, res, next) {
    let jsonData = await super.getList(GoodsTypeModel, req.query)
    return res.json(jsonData)
  }

  // 添加类型
  async addType (req, res, next) {
    let params = req.body
    let jsonData = {}

    if (!params || isEmptyObject(params)) {
      jsonData = retJsonData(ERR_PARAMS_NOT_EXIST)
      return res.json(jsonData)
    }

    let matchParams = {
      value: params.value
    }
    jsonData = await super.addOne(GoodsTypeModel, params, matchParams)
    return res.json(jsonData)
  }

  // 删除类型
  async deleteType (req, res, next) {
    let jsonData = await super.deleteOne(GoodsTypeModel, req.params)
    return res.json(jsonData)
  }

  // 更新类型
  async updateType (req, res, next) {
    let jsonData = await super.updateOne(GoodsTypeModel, req.body)
    return res.json(jsonData)
  }
}

export default new GoodsType()
