const express = require('express')
const router = express.Router()
const {get, add} = require('../controllers/user')

router.get('/',get)
router.post('/',add)

module.exports = router
