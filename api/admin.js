import express from 'express'
import Admin from '../controllers/admin'

const router = express.Router()

// login logout 应该都是post，这里只是做模拟测试
router.route('/login')
  .post(Admin.login)

router.route('/logout')
  .post(Admin.logout)

router.route('/register')
  .post(Admin.register)

export default router
