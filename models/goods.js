import mongoose from 'mongoose'
const Schema = mongoose.Schema

const GoodsSchema = new Schema({
  typeId: String,
  title: { // 标题
    type: String,
    required: true
  },
  desc: String, // 描述
  picture: String, // 图片
  price: Number, // 价格
  salesVolume: Number, // 销售量
  inventory: Number, // 库存
  create_time: Date,
  update_time: Date,
  status: {
    type: Number,
    default: 0 // 0 表示可用， 1 表示未发布， 2 表示删除
  }
})

export default mongoose.model('Goods', GoodsSchema)
