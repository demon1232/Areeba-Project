const express = require('express')
const   AdvertisementCategoriesRouter = express.Router() 
const  AdvertisementCategoriesHandler = require('../Dacs/AdvertisementCategories.dac')

AdvertisementCategoriesRouter.post('/', AdvertisementCategoriesHandler .addAdvertisementCategories)
AdvertisementCategoriesRouter.get('/', AdvertisementCategoriesHandler .getAdvertisementCategories)
AdvertisementCategoriesRouter.put('/cid/:id', AdvertisementCategoriesHandler . updateAdvertisementCategories)
AdvertisementCategoriesRouter.delete('/cid/:id', AdvertisementCategoriesHandler .removeAdvertisementCategories)

module.exports =  AdvertisementCategoriesRouter;