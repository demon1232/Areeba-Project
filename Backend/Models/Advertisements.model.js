const {mongoose,SchemaTypes} = require('mongoose');

const advertisementSchema = new mongoose.Schema({

    "name":{ 
        type: SchemaTypes.String,
     },
     "price":{
        type: SchemaTypes.Number,
           
     },
    "description":{ 
        type: SchemaTypes.String,
        
     },
     "features":{ 
        type: SchemaTypes.String,
        
     },
   "postedbyid": {  
        type:SchemaTypes.ObjectId,
        ref: 'Users',
    
    },
    "startson": { 
        type:SchemaTypes.Date, 
        
    },
    "endson": {
         type: SchemaTypes.Date,
         
    },
   "statusid": {
        type:SchemaTypes.ObjectId,
        ref: 'AdvertisementStatuses',
        
    },
    "typeid": {
        type:SchemaTypes.ObjectId,
        ref: 'AdvertisementType',
        
    },
   "categoryid": { 
         type:SchemaTypes.ObjectId,
         ref: 'AdvertisementCategories', 
         
    },
    "cityareaid":{ 
         type:SchemaTypes.ObjectId, 
         ref: 'CityArea',
         
    },
    "image":{
        type:SchemaTypes.String,
    }

});
const Advertisement = mongoose.model("Advertisement",advertisementSchema);
module.exports = Advertisement;
