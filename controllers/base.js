class Base {
  constructor () {
    this.baseResponse = this.baseResponse.bind(this)
    this.isEmptyObject = this.isEmptyObject.bind(this)
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
}

export default Base
