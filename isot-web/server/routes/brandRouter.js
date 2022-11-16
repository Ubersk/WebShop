const Router = require ('express')
const router = Router()
const brandController = require ('../controllers/brandController')


router.post ('/',brandController.create) //Создание
router.get ('/',brandController.getAll) //Получение

module.exports = router