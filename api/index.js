import express from 'express'

import Users from './users'
import Admin from './admin'
import Goods from './goods'
import GoodsType from './goods-type'
import Order from './order'
import Upload from './upload'



export default app => {
  app.all('*', (req, res, next) => { // CORS 的开放访问
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,PATCH,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    next();
  })
  app.all('*', (req, res, next) => {

    next()
  })

  const router = express()
  app.use('/api', router)
  router.use('/users', Users)
  router.use('/admin', Admin)
  router.use('/goods', Goods)
  router.use('/goods-type', GoodsType)
  router.use('/order', Order)
  router.use('/upload', Upload)
}
