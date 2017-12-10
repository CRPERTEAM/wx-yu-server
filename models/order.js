import mongoose from "mongoose"
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  typeId: {
    type: Number,
    default: 0 // 0为普通订单，1为赊账订单
  },
  billNumber: String, //订单号
  goodsIds: Array, // 商品的id列表
  buyerId: String, // 购买者的id
  create_time: Date,
  update_time: Date
});

export default mongoose.model("Order", OrderSchema);
