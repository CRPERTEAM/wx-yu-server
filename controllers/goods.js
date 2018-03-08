import Base from './base'
import GoodsModel from '../models/goods'
import GoodsTypeModel from '../models/goods-type'

class Goods extends Base {
  constructor () {
    super()
  }

  // 获取商品列表
  getGoodsList = async (req, res, next) => {
    try {
      let jsonData = await this.getList(GoodsModel, req.query)
      return res.json(jsonData)
    } catch (err) {
      throw err
    }
  }

  // 获取商品
  getGoods = async (req, res, next) => {
    // base类封装的已经包含的了errcode & errmsg，方便了错误处理，但是关联查询的时候会带来一定的繁琐，这个地方需要稍微考量一下
    try {
      let jsonData = await this.getOne(GoodsModel, req.params)
      return res.json(jsonData)
    } catch (err) {
      throw err
    }
  }

  // 添加商品
  addGoods = async (req, res, next) => {
    console.log('addGoods: ', req.body)
    this.validator(req.body)
    let jsonData = await this.addOne(GoodsModel, req.body)
    return res.json(jsonData)
  }

  // 删除商品
  async deleteGoods (req, res, next) {
    let jsonData = await this.deleteOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  // 更新商品
  updateGoods = async (req, res, net) => {
    this.validator(req.body)
    let jsonData = await this.updateOne(GoodsModel, req.body)
    return res.json(jsonData)
  }

  validator = (data) => {
    if ('price' in data) {
      data.price = data.price || 0
    }
  }
}

export default new Goods()
