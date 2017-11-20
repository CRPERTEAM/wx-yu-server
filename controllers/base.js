class Base {
  constructor () {
    this.baseResponse = this.baseResponse.bind(this)
  }

  baseResponse (res, err = {}, data = {}) {
    return res.json({
      'errcode': err.errcode,
      'errmsg': err.errmsg,
      'data': data
    })
  }
}

export default Base
