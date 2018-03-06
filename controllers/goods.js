import Base from './base'
import GoodsModel from '../models/goods'
import GoodsTypeModel from '../models/goods-type'

class Goods extends Base {
  constructor () {
    super()
  }

  // 获取商品列表
  async getGoodsList (req, res, next) {
    try {
      let jsonData = await super.getList(GoodsModel, req.query)
      return res.json(jsonData)
    } catch (err) {
      throw err
    }
  }

  // 获取商品
  async getGoods (req, res, next) {
    // base类封装的已经包含的了errcode & errmsg，方便了错误处理，但是关联查询的时候会带来一定的繁琐，这个地方需要稍微考量一下
    try {
      let jsonData = await super.getOne(GoodsModel, req.params)
      return res.json(jsonData)
    } catch (err) {
      throw err
    }
  }

  // 添加商品
  async addGoods (req, res, next) {
    console.log('addGoods: ', req.body)
    let jsonData = await super.addOne(GoodsModel, req.body)
    return res.json(jsonData)
  }

  // 删除商品
  async deleteGoods (req, res, next) {
    let jsonData = await super.deleteOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  // 更新商品
  async updateGoods (req, res, net) {
    let jsonData = await super.updateOne(GoodsModel, req.body)
    return res.json(jsonData)
  }
}

export default new Goods()
