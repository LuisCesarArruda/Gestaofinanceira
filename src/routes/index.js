const express = require('express')
const router = express.Router()

const userRouter = require('./user_router')
const homeRouter = require('./home_router')
const despesaRouter = require('./despesa_router')

router.use('/', homeRouter)
router.use('/user', userRouter)
router.use('/despesa', despesaRouter)

module.exports = router