const {mongoose,SchemaTypes} = require('mongoose');

const cityAreaSchema = new mongoose.Schema({
   
   "name":{
        type: SchemaTypes.String,
    },
   "cityid":{
    type: SchemaTypes.ObjectId,
     ref: 'Cities'
    },
    //cityarea schema ref to city schema
});

const CityArea = mongoose.model("CityArea",cityAreaSchema);

module.exports = CityArea;
