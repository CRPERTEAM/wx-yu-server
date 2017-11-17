import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  user: String,
  password: String
})

export default UserSchema
