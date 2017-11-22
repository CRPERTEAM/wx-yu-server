import {
  ERR_SUCCESS,
  ERR_FAILED,
  ERR_PARAMS_NOT_EXIST
} from '../utils/errResponse'

class Base {
  constructor () {
    this.baseResponse = this.baseResponse.bind(this)
    this.isEmptyObject = this.isEmptyObject.bind(this)
    this.findList = this.findList.bind(this)
    this.getList = this.getList.bind(this)
    this.getOne = this.getOne.bind(this)
  }

  baseResponse (res, err = {}, data = {}) {
    return res.json({
      'errcode': err.errcode,
      'errmsg': err.errmsg,
      'data': data
    })
  }

  isEmptyObject (obj) {
    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        return false
      }
    }
    return true
  }

  findList (model, param = {}, limit = 10) {
    return model.find(param)
                .limit(limit)
                .sort({'_id': -1})
  }

  async getOne (model, res, _id) {
    try {
      let one = await model.findOne({_id: id})
      if (one) {
        return this.baseResponse(res, ERR_SUCCESS(`${model.modelName} 获取成功`), one)
      } else {
        return this.baseResponse(res, ERR_FAILED('不存在该类型'))
      }
    } catch (err) {
      return this.baseResponse(res, ERR_FAILED(err.message))
    }
  }

  async getList (model, params, res, ) {
    const _id = params._id
    if (_id) {
      return this.getOne(res, _id)
    }

    const lastId = params.lastId || 0
    let findParams = {}

    if (lastId) {
      findParams['_id'] = {'$lt': lastId}
    }

    try {
      let list = await this.findList(model, findParams)
      if (list) {
        return this.baseResponse(res, ERR_SUCCESS(`${model.modelName} 列表获取成功`), list)
      } else {
        return this.baseResponse(res, ERR_FAILED('不存在该类型'))
      }
    } catch (err) {
      return this.baseResponse(res, ERR_FAILED(err.message))
    }
  }
}

export default Base
