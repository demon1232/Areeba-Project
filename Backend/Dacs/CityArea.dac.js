const CityArea = require('../Models/CityArea.model')

class cityAreaHandler{
    constructor(){} 
    async addCityArea(req,res){
        try{ 
            const {name,cityid}= req.body;
            const added = await CityArea.create({
                name: name,
                cityid: cityid,

            
            });
            const populated = await added
            console.log(populated)
            
            if (added) return res.status(201).json({"Added": added})
                return res.status(400).json({ msg: 'Unable to add CityArea'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message})
        } 
      }

      async getCityArea(req,res){
        try{ 
           
            const getted = await CityArea.find()
            // .populate("categoryId")
            if (getted) return res.status(201).json(getted)
                return res.status(400).json({ msg: 'Unable to find CityArea'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async updateCityArea(req,res){
        try{ 
            const id = req.params.id
            const updated = await CityArea.findByIdAndUpdate(id,{
                name: req.body.name,
                cityid:req.body.cityid,
                
              
            });
            if (updated) return res.status(201).json({"Updated": updated})
                return res.status(400).json({ msg: 'Unable to update CityArea'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

      async removeCityArea(req,res){
        try{ 
            const id = req.params.id
            const removed = await   CityArea.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove CityArea'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const CityAreaHandler = new cityAreaHandler()
module.exports = CityAreaHandler 