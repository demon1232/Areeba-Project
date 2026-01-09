const express = require('express')
const   AdvertisementTypeRouter = express.Router() 
const  AdvertisementTypeHandler  = require('../Dacs/AdvertisementType.dac')

AdvertisementTypeRouter.post('/', AdvertisementTypeHandler  .addAdvertisementType)
AdvertisementTypeRouter.get('/', AdvertisementTypeHandler  .getAdvertisementType)
AdvertisementTypeRouter.put('/tid/:id', AdvertisementTypeHandler  .updateAdvertisementType)
AdvertisementTypeRouter.delete('/tid/:id', AdvertisementTypeHandler  .removeAdvertisementType)

module.exports =  AdvertisementTypeRouter;