import Base from './base'
import OrderModel from '../models/order'

class Order extends Base {
  constructor () {
    super()
  }

  // 获取订单列表
  async getOrderList (req, res, next) {
    console.log('getOrderList')
    let jsonData = await super.getList(OrderModel, req.query)
    return res.json(jsonData)
  }

  // 获取订单
  async getOrder (req, res, next) {
    let jsonData = await super.getOne(OrderModel, req.params)
    return res.json(jsonData)
  }

  // 生成新订单
  async addOrder (req, res, next) {
    let jsonData = await super.addOne(OrderModel, req.body)
    return res.json(jsonData)
  }

  // 删除订单
  async deleteOrder (req, res, next) {
    let jsonData = await super.deleteOne(OrderModel, req.params)
    return res.json(jsonData)
  }

  // 更新订单信息
  async updateOrder (req, res, net) {
    let jsonData = await super.updateOne(OrderModel, req.body)
    return res.json(jsonData)
  }
}

export default new Order()
