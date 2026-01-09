const {mongoose,SchemaTypes} = require('mongoose');

const provincesSchema = new mongoose.Schema({
   
    "name":{
        type: SchemaTypes.String,
        require:true
    },
    "countryid":{
        type: mongoose.Schema.Types.ObjectId, ref: 'Countries', required: true 
    },
    //province schema ref to contries schema
});

const Provinces = mongoose.model("Provinces",provincesSchema);

module.exports = Provinces;
