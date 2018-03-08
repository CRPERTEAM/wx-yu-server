import Base from './base'
import OrderModel from '../models/order'

class Order extends Base {
  constructor () {
    super()
  }

  // 获取订单列表
  getOrderList = async (req, res, next) => {
    console.log('getOrderList')
    let jsonData = await this.getList(OrderModel, req.query)
    return res.json(jsonData)
  }

  // 获取订单
  getOrder = async (req, res, next) => {
    let jsonData = await this.getOne(OrderModel, req.params)
    return res.json(jsonData)
  }

  // 生成新订单
  addOrder = async (req, res, next) => {
    let jsonData = await this.addOne(OrderModel, req.body)
    return res.json(jsonData)
  }

  // 删除订单
  deleteOrder = async (req, res, next) => {
    let jsonData = await this.deleteOne(OrderModel, req.params)
    return res.json(jsonData)
  }

  // 更新订单信息
  updateOrder = async (req, res, net) => {
    let jsonData = await this.updateOne(OrderModel, req.body)
    return res.json(jsonData)
  }
}

export default new Order()
