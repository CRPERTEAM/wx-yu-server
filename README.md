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
- 跑起来: `node app.js` or `pm2 start app.js`


### 目录结构

```bash
├── .babelrc
├── .gitignore
├── Dockerfile
├── README.md
├── api
│   ├── admin.js
│   ├── goods-type.js
│   ├── goods.js
│   ├── index.js
│   └── users.js
├── app.js
├── bin
│   └── www
├── config
│   ├── development.js
│   ├── index.js
│   └── production.js
├── controllers
│   ├── admin.js
│   ├── base.js
│   ├── goods-type.js
│   ├── goods.js
│   └── users.js
├── middlewares
│   └── check-api-token.js
├── models
│   ├── admin.js
│   ├── goods-type.js
│   ├── goods.js
│   └── user.js
├── mongodb
│   └── index.js
├── package-lock.json
├── package.json
├── public
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
├── utils
│   ├── common.js
│   ├── errResponse.js
│   └── token.js
└── yarn.lock

```



# 后续计划

若是该项目顺利完工的情况下.
会考虑在下一个迭代版本引入`GraphQL`
`express 4`更换为`Koa 2`
