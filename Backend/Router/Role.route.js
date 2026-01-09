const express = require('express')
const  RoleRouter = express.Router() 
const   RoleHandler    = require('../Dacs/Role.dac')

RoleRouter .post('/', RoleHandler   .addRole)
RoleRouter.get('/',  RoleHandler  .getRole)
RoleRouter.put('/rid/:id',  RoleHandler   .updateRole)
RoleRouter.delete('/rid/:id', RoleHandler   .removeRole)

module.exports =  RoleRouter;