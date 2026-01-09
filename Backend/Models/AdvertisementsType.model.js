const {mongoose,SchemaTypes} = require('mongoose');

const advertisementTypeSchema = new mongoose.Schema({

   "name":{
        type: SchemaTypes.String,
        
    },
});
const AdvertisementType = mongoose.model("AdvertisementType",advertisementTypeSchema);

module.exports = AdvertisementType;
