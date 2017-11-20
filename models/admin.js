import mongoose from 'mongoose'
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  username: String,
  password: String,
  level: {
    type: Number,
    default: 1 // 1 为管理员
  },
  create_time: Date,
  update_time: Date
})

export default mongoose.model('Admin', AdminSchema)
