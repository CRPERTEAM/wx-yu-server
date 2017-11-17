class Base {
  constructor () {
    this.baseResponse = this.baseResponse.bind(this)
  }

  baseResponse (errcode = 0, errmsg = 'ok', data = {}) {
    return {
      'errcode': errcode,
      'errmsg': errmsg,
      'data': data
    }
  }
}

export default Base
