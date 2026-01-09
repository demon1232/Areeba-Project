const express = require('express')
const   AdvertisementStatusesRouter = express.Router() 
const  AdvertisementStatusesHandler  = require('../Dacs/AdvertisementStatues.dac')

AdvertisementStatusesRouter.post('/', AdvertisementStatusesHandler  .addAdvertisementStatuses)
AdvertisementStatusesRouter.get('/', AdvertisementStatusesHandler  .getAdvertisementStatuses)
AdvertisementStatusesRouter.put('/sid/:id', AdvertisementStatusesHandler  .updateAdvertisementStatuses)
AdvertisementStatusesRouter.delete('/sid/:id', AdvertisementStatusesHandler  .removeAdvertisementStatuses)

module.exports =  AdvertisementStatusesRouter;