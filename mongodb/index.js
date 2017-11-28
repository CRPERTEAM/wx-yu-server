import mongoose from 'mongoose'

// let url = 'mongodb://116.62.133.128/test'
let url = 'mongodb://172.16.162.40/test'
mongoose.connect(url, { useMongoClient: true })
mongoose.Promise = global.Promise

const db = mongoose.connection

db.once('open', () => {
  console.log('连接数据库成功')
})

db.on('error', (err) => {
  console.log('Error in MongoDB connection: ', err)
  mongoose.disconnect()
})

db.on('close', () => {
  console.log('数据库断开， 重连ing')
  mongoose.connect(url, { server: { auto_reconnect: true } })
})
