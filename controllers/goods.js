import Base from './base'
import GoodsModel from '../models/goods'

class Goods extends Base {
  constructor () {
    super()
  }

  // 获取商品列表
  async getGoodsList (req, res, next) {
    console.log('getGoodsList')
    let jsonData = await super.getList(GoodsModel, req.query)
    return res.json(jsonData)
  }

  // 获取商品
  async getGoods (req, res, next) {
    let jsonData = await super.getOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  // 添加商品
  async addGoods (req, res, next) {
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
