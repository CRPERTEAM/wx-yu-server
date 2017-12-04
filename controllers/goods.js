import Base from './base'
import GoodsModel from '../models/goods'

class Goods extends Base {
  constructor () {
    super()
  }

  // 获取商品列表
  async getGoodsList (req, res, next) {
    let jsonData = await this.getList(GoodsModel, req.query)
    return res.json(jsonData)
  }

  // 获取商品
  async getGoods (req, res, next) {
    let jsonData = await this.getOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  // 添加商品
  async addGoods (req, res, next) {
    let jsonData = await this.addOne(GoodsModel, req.body)
    return res.json(jsonData)
  }

  // 删除商品
  async deleteGoods (req, res, next) {
    let jsonData = await this.deleteOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  // 更新商品
  async updateGoods (req, res, net) {
    let jsonData = await this.updateOne(GoodsModel, req.body)
    return res.json(jsonData)
  }
}

export default new Goods()
