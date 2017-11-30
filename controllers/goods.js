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
    this.getGoodsField = this.getGoodsField.bind(this)
  }

  async getGoodsField (req, res, next) {
    let jsonData = await this.getFields(GoodsModel, req.query)
    return res.json(jsonData)
  }

  async getGoodsList (req, res, next) {
    let jsonData = await this.getList(GoodsModel, req.query)
    return res.json(jsonData)
  }

  async getGoods (req, res, next) {
    let jsonData = await this.getOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  async addGoods (req, res, next) {
    let jsonData = await this.addOne(GoodsModel, req.body)
    return res.json(jsonData)
  }

  async deleteGoods (req, res, next) {
    let jsonData = await this.deleteOne(GoodsModel, req.params)
    return res.json(jsonData)
  }

  async updateGoods (req, res, net) {
    let jsonData = await this.updateOne(GoodsModel, req.body)
    return res.json(jsonData)
  }
}

export default new Goods()
