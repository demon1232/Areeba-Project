const express = require('express')
const  AdvertisementRouter = express.Router() 
const AdvertisementHandler = require('../Dacs/Advertisement.dac')
const upload  = require('../Middleware/fileupload.middleware');

AdvertisementRouter.post('/', upload.single('image'),AdvertisementHandler.addAdvertisement)
AdvertisementRouter.get('/',AdvertisementHandler.getAdvertisement)
AdvertisementRouter.get('/category/:id',AdvertisementHandler.getAdvertisementbycategory);
AdvertisementRouter.put('/aid/:id',upload.single('image'),AdvertisementHandler.updateAdvertisement)
AdvertisementRouter.delete('/aid/:id',AdvertisementHandler.removeAdvertisement)

module.exports = AdvertisementRouter;
