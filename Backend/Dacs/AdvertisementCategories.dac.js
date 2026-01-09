const AdvertisementCategories = require('../Models/AdvertisementCategories.model')

class advertisementCategoriesHandler{
    constructor(){} 
    async addAdvertisementCategories(req,res){
        try{ 
            const {name,image,quantity}= req.body;
            const added = await AdvertisementCategories.create({
                name: name,
                image: image,
                quantity:quantity,
            
            });
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add AdvertisementCategories'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getAdvertisementCategories(req,res){
        try{ 
           
            const getted = await AdvertisementCategories.find();
            if (getted) return res.status(200).json( getted)
                console.log(getted)
                return res.status(400).json({ msg: 'Unable to find AdvertisementCategories'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateAdvertisementCategories(req,res){
        try{ 
            const id = req.params.id
            const updated = await AdvertisementCategories.findByIdAndUpdate(id,{
                name: req.body.name,
                image: req.body.image,
                quantity:req.body.quantity,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update AdvertisementCategories'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeAdvertisementCategories(req,res){
        try{ 
            const id = req.params.id
            const removed = await AdvertisementCategories.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove AdvertisementCategories'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const AdvertisementCategoriesHandler = new advertisementCategoriesHandler()
module.exports = AdvertisementCategoriesHandler 