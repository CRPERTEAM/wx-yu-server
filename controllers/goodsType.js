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
    this.addType = this.addType.bind(this)
    this.deleteType = this.deleteType.bind(this)
  }

  async getTypes (req, res, next) {
    return this.getList(GoodsTypeModel, req.query, res)
  }

  async addType (req, res, next) {
    let params = req.body
    if (!params || this.isEmptyObject(params) || !params.value) {
      return this.baseResponse(res, ERR_PARAMS_NOT_EXIST)
    }

    try {
      let exist = await GoodsTypeModel.findOne({value: params.value})
      if (exist) {
        return this.baseResponse(res, ERR_FAILED('该类型已经存在'))
      }

      let type = await GoodsTypeModel.create(params)
      if (type) {
        return this.baseResponse(res, ERR_SUCCESS('添加类型成功'), type)
      } else {
        return this.baseResponse(res, ERR_FAILED('添加类型失败'))
      }
    } catch (err) {
      return this.baseResponse(res, ERR_FAILED(err.message))
    }
  }

  async deleteType (req, res, next) {
    return this.baseResponse(res, ERR_SUCCESS('删除类型成功'))
  }
}

export default new GoodsType()
