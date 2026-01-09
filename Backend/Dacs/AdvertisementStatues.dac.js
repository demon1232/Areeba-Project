const AdvertisementStatuses = require('../Models/AdvertisementStatues.model')
class advertisementStatusesHandler{
    constructor(){} 
    async addAdvertisementStatuses(req,res){
        try{ 
            const {name}= req.body;
            const added = await AdvertisementStatuses.create({
                name: name,

            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add AdvertisementStatuses'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getAdvertisementStatuses(req,res){
        try{ 
           
            const getted = await AdvertisementStatuses.find();
            if (getted) return res.status(201).json({"Getted": getted})
                return res.status(400).json({ msg: 'Unable to find AdvertisementStatuses'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateAdvertisementStatuses(req,res){
        try{ 
            const id = req.params.id
            const updated = await AdvertisementStatuses.findByIdAndUpdate(id,{
                name: req.body.name,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update AdvertisementStatuses'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeAdvertisementStatuses(req,res){
        try{ 
            const id = req.params.id
            const removed = await AdvertisementStatuses.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove AdvertisementStatuses'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const AdvertisementStatusesHandler = new advertisementStatusesHandler()
module.exports = AdvertisementStatusesHandler 