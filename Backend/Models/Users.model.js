const {mongoose,SchemaTypes} = require('mongoose');

const usersSchema = new mongoose.Schema({
    
   "name": {
         type: SchemaTypes.String,
          
        
    },
    "email": { 
        type: SchemaTypes.String,
       
    },
    // apiKey: { 
    //     type: SchemaTypes.String,
        
    //      },
    // LoginId: {
    //      type: SchemaTypes.String,
    //       required: true, 
    //       unique: true 
    //     },
    "password": { 
        type: SchemaTypes.String, 
    
    },
    // SecurityQuestion: {
    //      type: SchemaTypes.String,
           
    //     },
    // SecurityAnswer: { 
    //     type: SchemaTypes.String, 
        
    // },
    "birthDate": { 
        type: SchemaTypes.Date,
         
         },
   "contactNumbers":[{
         type: SchemaTypes.Number
         }], // Array for multiple contact numbers
   "image": { 
        type: SchemaTypes.String 
    }
//    " roleId": {
//          type: SchemaTypes.ObjectId,
//           ref: 'Role', 
    
//         }
    
   
});

const Users = mongoose.model("Users",usersSchema);

module.exports = Users;
