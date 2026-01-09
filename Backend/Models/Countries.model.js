const {mongoose,SchemaTypes} = require('mongoose');

const contriesSchema = new mongoose.Schema({
  
    "name":{
        type: SchemaTypes.String,
        require:true
    },
   "code":{
        type: SchemaTypes.Number,
    
    },
    
});

const Contries = mongoose.model("Contries",contriesSchema);

module.exports = Contries;
