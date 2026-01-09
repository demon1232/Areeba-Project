const Users = require('../Models/Users.model')
 const jwt = require("jsonwebtoken");
 const bcryptjs=require("bcryptjs");

class usersHandler{
    constructor(){} 
    async addUsers(req,res){
        try{ 
            const {name,email,apiKey,LoginId,password,contactNumbers, securityQuestion,securityAnswer,birthDate,image}= req.body;
            const added = await Users.create({
                name: name,
                email: email,
                // ApiKey: ApiKey,
                // //LoginId:LoginId,
                password:password,
                contactNumbers:contactNumbers,
                // SecurityQuestion: SecurityQuestion,
                // SecurityAnswer:SecurityAnswer,
                birthDate:birthDate,
                image:image,
                //  roleId:roleId,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add Users'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
    }

    async getbyidUsers(req,res){
        const id = req.params.id
        try{
           // console.log("id found at dac:",id)
            const getted = await Users.findById(id)
           // console.log("User Found :" ,getted)
            if(getted) return res.status(200).json(getted)
                return res.status(400).json({msg : 'Unable to find users'})
        }
        catch(err){
            console.log(err)
            res.status(500).json({ msg : err.message})
        }
    }
    
    async Create(req, res) {
        try {
            const obj = req.body;
           // console.log(obj);
            obj.image = req.file.filename
            if (!obj.email|| !obj.password || !obj.name) return res.status(400).json("invalid json data, email,password, fullName and role are required field");
            obj.password = await bcryptjs.hash(obj.password, 10);
            const created = await Users.create(obj);
            return res.status(201).json(created);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ msg : err.message })
        }
    }
      async getUsers(req,res){
        try{ 
           
            const getted = await Users.find()
            // .populate("RoleId");
            if (getted) return res.status(200).json( getted)
                return res.status(400).json({ msg: 'Unable to find Users'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateUsers(req,res){
        try{ 
            const id = req.params.id
            const updated = await Users.findByIdAndUpdate(id,{
                name: req.body.name,
                email: req.body.email,
                // apiKey: req.body.apiKey,
                // loginId:req.body.loginId,
                password:req.body.password,
                // SecurityQuestion: req.body.SecurityQuestion,
                // SecurityAnswer:req.body.SecurityAnswer,
                birthDate:req.body.birthDate,
                image:req.body.image, 
                //  RoleId:req.body.RoleId,
              
                
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update Users'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeUsers(req,res){
        try{ 
            const id = req.params.id
            const removed = await Users.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove Users'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async Login(req, res) {
        try {
           // console.log(req.body);
            const currentUsers = await Users.findOne({ email: req.body.email });
            // console.log(currentUser);
            if (currentUsers) {
                //compare password from user with encrypted password in database
                if (await bcryptjs.compare(req.body.password, currentUsers.password)) {
                    const key = process.env.JWT_SECRET_KEY
                    const payLoad = { _id: currentUsers._id };
                    const token = await jwt.sign(
                        payLoad,//data as payload
                        key, //secret key for encryption
                        { expiresIn: '1h' } //options  
                    );
                   
                    //return res.status(200).json({ token: token, users: currentUser });
                     return res.status(200).json({token,currentUsers});
                }
            }
            return res.status(404).json({ message: `invalid email or password` });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "failed to get users" });
        }
    }
    async authenticate(req, res, next) {
        try {
            const token = req.header(process.env.JWT_TOKEN_HEADER);
            const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const Users = await User.findById(tokenData._id).populate("Role");
            if (Users) {
                console.log(1);
                req.user = Users;
                return next();
            }
            return res.status(401).json({ message: "authentication failed" });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "authentication failed" });
        }
    }   
}
const UsersHandler = new usersHandler()
module.exports = UsersHandler