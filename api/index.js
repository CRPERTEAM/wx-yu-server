import express from 'express'
import users from './users'
import admin from './admin'
import goods from './goods'
const router = express()

export default app => {
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    next()
  })
  app.use('/api', router)

  router.use('/users', users)
  router.use('/admin', admin)
  router.use('/goods', goods)
}
