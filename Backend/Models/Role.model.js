const {mongoose,SchemaTypes} = require('mongoose');

const roleSchema = new mongoose.Schema({

   "name":{
        type: SchemaTypes.String,
        require:true,
    
    }
});
const Role = mongoose.model("Role",roleSchema);

module.exports = Role;
