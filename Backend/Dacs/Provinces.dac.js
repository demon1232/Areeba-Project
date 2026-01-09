const Provinces = require('../Models/Provinces.model')

class provincesHandler{
    constructor(){} 
    async addProvinces(req,res){
        try{ 
            const {name,countryid}= req.body;
            const added = await Provinces.create({
                name: name,
                countryid:countryid,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add Provinces'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getProvinces(req,res){
        try{ 
           
            const getted = await Provinces.find();
            if (getted) return res.status(201).json({"Getted": getted})
                return res.status(400).json({ msg: 'Unable to find Provinces'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateProvinces(req,res){
        try{ 
            const id = req.params.id
            const updated = await Provinces.findByIdAndUpdate(id,{
                name: req.body.name,
                countryid:req.body.countryid,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update Provinces'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeProvinces(req,res){
        try{ 
            const id = req.params.id
            const removed = await Provinces.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove Provinces'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const ProvincesHandler = new provincesHandler()
module.exports = ProvincesHandler 