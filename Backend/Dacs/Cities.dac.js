const Cities = require('../Models/Cities.model')

class citiesHandler{
    constructor(){} 
    async addCities(req,res){
        try{ 
            const {name,provinceid}= req.body;
            const added = await Cities.create({
                name: name,
                provinceid:provinceid,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add Cities'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getCities(req,res){
        try{ 
           
            const getted = await Cities.find();
            if (getted) return res.status(201).json( getted)
                return res.status(400).json({ msg: 'Unable to find Cities'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateCities(req,res){
        try{ 
            const id = req.params.id
            const updated = await Cities.findByIdAndUpdate(id,{
                name: req.body.name,
                provinceid:req.body.provinceid,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update Cities'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeCities(req,res){
        try{ 
            const id = req.params.id
            const removed = await AdvertisementType.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove AdvertisementType'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const CitiesHandler = new citiesHandler()
module.exports = CitiesHandler 