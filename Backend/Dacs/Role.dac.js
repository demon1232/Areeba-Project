const Role = require('../Models/Role.model')
class roleHandler{
    constructor(){} 
    async addRole(req,res){
        try{ 
            const {name}= req.body;
            const added = await Role.create({
                name: name,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add Role'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getRole(req,res){
        try{ 
           
            const getted = await Role.find();
            if (getted) return res.status(201).json({"Getted": getted})
                return res.status(400).json({ msg: 'Unable to find Role'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateRole(req,res){
        try{ 
            const id = req.params.id
            const updated = await Role.findByIdAndUpdate(id,{
                name: req.body.name,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update Role'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeRole(req,res){
        try{ 
            const id = req.params.id
            const removed = await Role.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove Role'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const RoleHandler = new roleHandler()
module.exports =  RoleHandler 