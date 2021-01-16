const express = require('express')
const router = express.Router()

const productsControllers = require('../controllers/productsControllers')

router.get('/all', productsControllers.getAll)

module.exports = router