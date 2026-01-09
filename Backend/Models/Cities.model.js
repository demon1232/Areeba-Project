const {mongoose,SchemaTypes} = require('mongoose');

const citiesSchema = new mongoose.Schema({
   
  "name":{
        type: SchemaTypes.String,
    },
    "provinceid":{
        type: SchemaTypes.ObjectId,
        ref : 'Provinces'
    },
  
    //city schema ref to "Provinces schema
});

const Cities = mongoose.model("Cities",citiesSchema);

module.exports = Cities;
