import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
})

export default mongoose.model('User', UserSchema)
