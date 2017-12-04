import express from 'express'; // express
import Admin from '../controllers/admin'; // 接口实现

const router = express.Router(); // 路由初始化

// login logout 应该都是post，这里只是做模拟测试
router.route('/login')
  .post(Admin.login)

router.route('/logout')
  .post(Admin.logout)

router.route('/register')
  .post(Admin.register)

export default router
