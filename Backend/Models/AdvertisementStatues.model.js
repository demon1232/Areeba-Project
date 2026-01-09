
const {mongoose,SchemaTypes} = require('mongoose');

const advertisementStatusesSchema = new mongoose.Schema({


    "name":{
        type: SchemaTypes.String,
        require:true
    },
});
const AdvertisementStatuses = mongoose.model("AdvertisementStatuses",advertisementStatusesSchema);

module.exports = AdvertisementStatuses;
