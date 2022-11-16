const Router = require ('express')
const router = Router()
const userController = require('../controllers/userController')

router.post ('/registration', userController.registration) //Не вызываем а передаем как объект
router.post ('/login', userController.login)
router.get ('/auth', userController.check)

module.exports = router