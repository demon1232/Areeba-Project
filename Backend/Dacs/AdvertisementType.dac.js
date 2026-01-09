const AdvertisementType = require('../Models/AdvertisementsType.model')

class advertisementTypeHandler{
    constructor(){} 
    async addAdvertisementType(req,res){
        try{ 
            const {name}= req.body;
            const added = await AdvertisementType.create({
                name: name,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add AdvertisementType'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getAdvertisementType(req,res){
        try{ 
           
            const getted = await AdvertisementType.find();
            if (getted) return res.status(201).json( getted)
                return res.status(400).json({ msg: 'Unable to find AdvertisementType'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateAdvertisementType(req,res){
        try{ 
            const id = req.params.id
            const updated = await AdvertisementType.findByIdAndUpdate(id,{
                name: req.body.name,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update AdvertisementType'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeAdvertisementType(req,res){
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
const AdvertisementTypeHandler = new advertisementTypeHandler()
module.exports = AdvertisementTypeHandler 