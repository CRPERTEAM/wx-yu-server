import mongoose from 'mongoose' // 引入 mongoose
import TypeSchema from './goods-type'
const Schema = mongoose.Schema // 映射表实例(概要)

const setPrice = val => {
  this.price = val || 0
}

const getPrice = val => {
  return val.toFixed(2);
}

const GoodsSchema = new Schema({
  types: [TypeSchema],
  title: {
    // 标题
    type: String,
    required: true
  },
  desc: String, // 描述
  picture: String, // 图片
  price: {
    // 价格
    type: Number,
    set: setPrice,
    get: getPrice
  },
  salesVolume: Number, // 销售量
  inventory: Number, // 库存
  create_time: Date,
  update_time: Date,
  status: {
    type: Number,
    default: 0 // 0 表示可用， 1 表示未发布， 2 表示删除
  }
})

// 使用getters的时候必须设置true，否则将不生效， 使用setters则没有影响
GoodsSchema.set('toJSON', { getters: true, virtuals: false })

export default GoodsSchema
