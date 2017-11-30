import express from 'express'
import users from './users'
import admin from './admin'
import goods from './goods'
import goodsType from './goods-type'
const router = express()

export default app => {
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,PATCH,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    next()
  })
  app.all('*', (req, res, next) => {
    
    
    next()
  })
  app.use('/api', router)

  router.use('/users', users)
  router.use('/admin', admin)
  router.use('/goods', goods)
  router.use('/goodsType', goodsType)
}
