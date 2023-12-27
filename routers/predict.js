const express = require('express')
const router = new express.Router()
const predictControllers = require('../controllers/predict')

router.post('/predict', predictControllers.userQues)

module.exports = router