const Countries = require('../Models/Countries.model')

class countriesHandler{
    constructor(){} 
    async addCountries(req,res){
        try{ 
            const {name,code}= req.body;
            const added = await Countries.create({
                name: name,
                code:code,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add Countries'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getCountries(req,res){
        try{ 
           
            const getted = await Countries.find();
            if (getted) return res.status(201).json({"Getted": getted})
                return res.status(400).json({ msg: 'Unable to find Countries'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateCountries(req,res){
        try{ 
            const id = req.params.id
            const updated = await Countries.findByIdAndUpdate(id,{
                name: req.body.name,
                code: req.body.code,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update Countries'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeCountries(req,res){
        try{ 
            const id = req.params.id
            const removed = await Countries.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove Countries'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const CountriesHandler = new countriesHandler()
module.exports = CountriesHandler 