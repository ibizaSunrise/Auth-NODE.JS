const Router = require('express')
const controller = require('./authController')
const {check} = require('express-validator')
const router = new Router()
const authMiddleware = require('./middleware/authMiddleware')
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration',
 [check('username', "Имя пользователя не может быть пустым").notEmpty(),
 check('password', "Пароль должен быть юольше 4 и меньше 10 символов").isLength({ min: 4, max: 10 }),
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router