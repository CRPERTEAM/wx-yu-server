import Base from './base'
import GoodsModel from '../models/goods'

class Goods extends Base {
  constructor () {
    super()
    this.getGoodsList = this.getGoodsList.bind(this)
    this.getGoods = this.getGoods.bind(this)
    this.addGoods = this.addGoods.bind(this)
    this.deleteGoods = this.deleteGoods.bind(this)
    this.updateGoods = this.updateGoods.bind(this)
  }

  async getGoodsList (req, res, next) {
    return this.getList(GoodsModel, res, req.query)
  }

  async getGoods (req, res, next) {
    return this.getOne(GoodsModel, res, req.params)
  }

  async addGoods (req, res, next) {
    return this.addOne(GoodsModel, res, req.body)
  }

  async deleteGoods (req, res, next) {
    return this.deleteOne(GoodsModel, res, req.params)
  }

  async updateGoods (req, res, net) {
    return this.updateOne(GoodsModel, res, req.body)
  }
}

export default new Goods()
