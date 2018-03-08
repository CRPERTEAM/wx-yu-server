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
  getType = async (req, res, next) => {
    let jsonData = await this.getOne(GoodsTypeModel, req.params)
    return res.json(jsonData)
  }

  // 获取类型列表
  getTypeList = async (req, res, next) => {
    let jsonData = await this.getList(GoodsTypeModel, req.query)
    return res.json(jsonData)
  }

  // 添加类型
  addType = async (req, res, next) => {
    let params = req.body
    let jsonData = {}

    if (!params || isEmptyObject(params)) {
      jsonData = retJsonData(ERR_PARAMS_NOT_EXIST)
      return res.json(jsonData)
    }

    let matchParams = {
      value: params.value
    }
    jsonData = await this.addOne(GoodsTypeModel, params, matchParams)
    return res.json(jsonData)
  }

  // 删除类型
  deleteType = async (req, res, next) => {
    let jsonData = await this.deleteOne(GoodsTypeModel, req.params)
    return res.json(jsonData)
  }

  // 更新类型
  updateType = async (req, res, next) => {
    let jsonData = await this.updateOne(GoodsTypeModel, req.body)
    return res.json(jsonData)
  }
}

export default new GoodsType()
