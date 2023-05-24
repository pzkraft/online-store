const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.addItem)
//router.get('/', basketController.getAll)
// delete item
//router.delete('/', basketController.deleteItem)
////////

module.exports = router