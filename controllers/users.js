class Users {
  constructor () {
    this.getUserinfo = this.getUserinfo.bind(this)
  }
  async getUserinfo (req, res, next) {
    return res.json({
      errcode: 0,
      errmsg: 'ok',
      data: {
      }
    })
  }
}

export default new Users()
