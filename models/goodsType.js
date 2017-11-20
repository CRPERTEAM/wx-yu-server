import mongoose from 'mongoose'
const Schema = mongoose.Schema

const GoodsTypeSchema = new Schema({
  label: String,
  value: String,
  create_time: Date,
  update_time: Date,
  status: {
    type: Number,
    default: 0 // 0 表示可用， 1 表示未发布， 2 表示删除
  }
})

export default mongoose.model('GoodsType', GoodsTypeSchema)
