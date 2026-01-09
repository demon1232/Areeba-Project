const express = require('express')
const   CityAreaRouter = express.Router() 
const  CityAreaHandler    = require('../Dacs/CityArea.dac')

CityAreaRouter .post('/', CityAreaHandler  .addCityArea)
CityAreaRouter.get('/', CityAreaHandler  .getCityArea)
CityAreaRouter.put('/caid/:id', CityAreaHandler   .updateCityArea)
CityAreaRouter.delete('/caid/:id', CityAreaHandler   .removeCityArea)

module.exports =  CityAreaRouter; 