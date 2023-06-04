const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')
const expressAsyncHandler = require("express-async-handler");

router.get('/user', expressAsyncHandler( userController.getUsers) )
router.get('/user/:id', expressAsyncHandler( userController.getOneUser) )
router.post('/user/:id', expressAsyncHandler( userController.createUser) )
router.put('/user/:id', expressAsyncHandler( userController.updateUser) )
router.delete('/user/:id', expressAsyncHandler( userController.deleteUser) )


module.exports = router