const express = require('express')
const   CitiesRouter = express.Router() 
const  CitiesHandler   = require('../Dacs/Cities.dac')

CitiesRouter.post('/', CitiesHandler   .addCities)
CitiesRouter.get('/', CitiesHandler   .getCities)
CitiesRouter.put('/Cid/:id', CitiesHandler   .updateCities)
CitiesRouter.delete('/Cid/:id', CitiesHandler   .removeCities)

module.exports =   CitiesRouter;