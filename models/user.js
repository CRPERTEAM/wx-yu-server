import mongoose from 'mongoose'
import UserSchema from '../schemas/user'

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
