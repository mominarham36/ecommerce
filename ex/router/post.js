const express = require('express');
const router = express.Router();
const { } = require('../controllers/post')

const {get,add} = require('../controllers/post')

router.get('/',get)
router.post('/',add)



module.exports = router