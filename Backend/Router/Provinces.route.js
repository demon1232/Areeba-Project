const express = require('express')
const  ProvincesRouter = express.Router() 
const  ProvincesHandler   = require('../Dacs/Provinces.dac')

ProvincesRouter .post('/', ProvincesHandler   .addProvinces)
ProvincesRouter.get('/', ProvincesHandler   .getProvinces)
ProvincesRouter.put('/pid/:id', ProvincesHandler   .updateProvinces)
ProvincesRouter.delete('/pid/:id', ProvincesHandler   .removeProvinces)

module.exports =   ProvincesRouter;