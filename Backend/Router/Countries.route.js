const express = require('express')
const   CountriesRouter = express.Router() 
const  CountriesHandler  = require('../Dacs/Countries.dac')

CountriesRouter .post('/', CountriesHandler   .addCountries)
CountriesRouter.get('/', CountriesHandler   .getCountries)
CountriesRouter.put('/coid/:id', CountriesHandler   .updateCountries)
CountriesRouter.delete('/coid/:id', CountriesHandler   .removeCountries)

module.exports =  CountriesRouter;