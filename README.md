###  前言

对应微信小程序`yu-mall`商城的后台,技术栈采用 `node`+`express`


### TODOS

- [ ] `JWT`鉴权
- [ ] `restful` 风格 `API`
- [x] `MongoDB`接入(使用`mongoose`)



### 安装使用姿势
> 项目测试环境, Node 9+(Current Version), LTS(8.9x)也可以的

- 克隆项目: `git clone https://github.com/CRPERTEAM/wx-yu-server.git`
- 进入项目: `cd wx-yu-server`
- 安装依赖: `yarn install` or `npm install`
- 跑起来: (可以自己写配置也可以用 `pm2`)
 - `npm start` : `package.json`,这条是针对开发模式的
 - `npm deploy` : 针对线上模式的


### 目录结构

```bash
├── .babelrc
├── .gitignore
├── Dockerfile // Docker配置文件
├── README.md
├── api // API接口目录
│   ├── admin.js // 权限相关，包含登录、注册、登出等接口
│   ├── goods-type.js // 商品类型接口
│   ├── goods.js // 商品接口
│   ├── index.js // API入口文件
│   └── users.js // 用户表接口
├── app.js // server入口
├── bin
│   └── www // server启动相关
├── config // 根据环境参数配置
│   ├── development.js // 开发环境config
│   ├── index.js
│   └── production.js // 生产环境config
├── controllers // controllers目录 处理接口逻辑相关代码
│   ├── admin.js
│   ├── base.js // 接口基础逻辑基类
│   ├── goods-type.js
│   ├── goods.js
│   └── users.js
├── middlewares // 中间件目录
│   └── check-api-token.js
├── models // mogogose模型，Schema也在此处定义
│   ├── admin.js
│   ├── goods-type.js
│   ├── goods.js
│   └── user.js
├── mongodb // mongdb启动相关
│   └── index.js
├── package-lock.json
├── package.json
├── utils // 常用方法
│   ├── common.js
│   ├── errResponse.js
│   └── token.js
└── yarn.lock

```



# 后续计划

若是该项目顺利完工的情况下.
会考虑在下一个迭代版本引入`GraphQL`
`express 4`更换为`Koa 2`
