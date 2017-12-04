import express from 'express'; // express
import Users from '../controllers/users'; // 接口实现

const router = express.Router(); // 路由初始化

router.route('/')
  .get(Users.getUserinfo)

export default router
