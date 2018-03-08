import mongoose from 'mongoose'
import GoodsSchema from './goods'
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  typeId: {
    type: Number,
    default: 0 // 0为普通订单，1为赊账订单
  },
  billNumber: String, //订单号
  // goodsIds: Array, // 商品的id列表
  goodsList: [GoodsSchema],
  buyerData: {
    userId: String,
    consignee: String,
    address: String,
    consigneeTel: String
  },
  remark: String,
  create_time: Date,
  update_time: Date
})

export default OrderSchema
