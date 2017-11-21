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

  async getType (res, id) {
    try {
      let type = await GoodsTypeModel.findOne({_id: id})
      if (type) {
        return this.baseResponse(res, ERR_SUCCESS('商品类型获取成功'), type)
      } else {
        return this.baseResponse(res, ERR_FAILED('不存在该类型'))
      }
    } catch (err) {
      return this.baseResponse(res, ERR_FAILED(err.message))
    }
  }

  async getTypes (req, res, next) {
    let params = req.query
    if (!params) {
      return this.baseResponse(res, ERR_PARAMS_NOT_EXIST)
    }

    const _id = params._id
    if (_id) {
      return this.getType(res, _id)
    }

    const lastId = params.lastId || 0
    let findParams = {}

    if (lastId) {
      findParams['_id'] = {'$lt': lastId}
    }

    try {
      let types = await GoodsTypeModel.find(findParams)
                                      .limit(10)
                                      .sort({'_id': -1})
      console.log('types: ', types)
      if (types) {
        return this.baseResponse(res, ERR_SUCCESS('商品类型获取成功'), types)
      } else {
        return this.baseResponse(res, ERR_FAILED('不存在该类型'))
      }
    } catch (err) {
      console.log('err: ', err.message)
      return this.baseResponse(res, ERR_FAILED(err.message))
    }
  }

  async addType (req, res, next) {
    let params = req.body
    if (!params) {
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
