import express from 'express'; // express 框架
import path from 'path'; // 内置模块
import logger from 'morgan'; // 日志中间件,有多种模式,也可以自定义输出格式
import cookieParser from 'cookie-parser'; // cookie res parser
import bodyParser from 'body-parser'; // body res parser
import api from './api'; // api
import './mongodb';

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

api(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // return the error
  res.status(err.status || 500)
  res.json({
    errcode: err.status,
    errmsg: err.message
  })
})

module.exports = app
