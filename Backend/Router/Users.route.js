const express = require('express')
const  UsersRouter = express.Router() 
const  UsersHandler = require('../Dacs/Users.dac')
const upload = require('../Middleware/fileupload.middleware')

UsersRouter .post('/', UsersHandler.addUsers)
UsersRouter .post('/signup',upload.single('image'), UsersHandler.Create)
UsersRouter .post('/login', UsersHandler.Login)
UsersRouter.get('/', UsersHandler.getUsers)
UsersRouter.get('/uid/:id', UsersHandler.getbyidUsers)
UsersRouter.put('/uid/:id', UsersHandler.updateUsers)
UsersRouter.delete('/uid/:id', UsersHandler.removeUsers)

module.exports =   UsersRouter;