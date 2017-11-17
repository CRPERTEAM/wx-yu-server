import express from 'express'
import Admin from '../controllers/admin'

const router = express.Router()

// login logout 应该都是post，这里只是做模拟测试
router.route('/login')
  .get(Admin.login)

router.route('/logout')
  .get(Admin.logout)

export default router
