const {mongoose,SchemaTypes} = require('mongoose');

const advertisementCategoriesSchema = new mongoose.Schema({

   "name":{
        type: SchemaTypes.String,
        require:true
    },
   "image":{
        type:SchemaTypes.String,
    },
    "quantity":{
        type:SchemaTypes.Number,
    }
});
const AdvertisementCategories = mongoose.model("AdvertisementCategories",advertisementCategoriesSchema);

module.exports = AdvertisementCategories;
