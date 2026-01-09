const Advertisement = require('../Models/Advertisements.model')

class advertisementHandler{getAdvertisementbycategoryid



    constructor(){} 
 
    async addAdvertisement(req,res){
        try {
            // const { name,price,description,features,startson,endson,postedbyid,statusid,typeid,categoryid,cityid} = req.body;
            const obj = req.body
            if(req.file){
                obj.image = req.file.filename
            }
            // console.log("Received at Add DAC : " , obj);
            const added = await Advertisement.create(obj);
            // {z
            
            //     name: name,
            //     price:price,
            //     description:description,
            //      features:features
            //     startson:startson,
            //     endson:endson,
            //     postedbyid:postedbyid,
            //     statusid:statusid,
            //     typeid:typeid,
            //     categoryid:categoryid,
            //     cityid:cityid
            // }
            if (added) return res.status(201).json( added )
            return res.status(400).json({msg : 'Unable to add Advertisement'})    
            
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ msg: err.message })
        }
    }
    async getAdvertisement(req,res){
        try{
            const getted = await Advertisement.find()
             .populate("postedbyid")
            // .populate("statusid")
            //  .populate("categoryid")
            //  .populate("typeid")
            .populate("cityareaid");
            if(getted) return res.status(200).json(getted)
            return res.status(400).json({msg : 'Unable to find Advertisement'})

        }
        catch(err){
            console.log(err)
            res.status(500).json({ msg : err.message })
        }

    }

      async getAdvertisementbycategory(req,res){
        const id = req.params.id
        //console.log(id);
        try{
            const getted = await Advertisement.find({"categoryid" : id })
            // .populate("postedbyid")
            // .populate("statusid")
            // .populate("categoryid")
            // .populate("typeid")
            // .populate("cityareaid");
            if(getted) return res.status(200).json(getted)
            return res.status(400).json({msg : 'Unable to find Advertisement'})

        }
        catch(err){
            console.log(err)
            res.status(500).json({ msg : err.message })
        }

     }
      async updateAdvertisement(req,res){
        try{ 
            const id = req.params.id
            console.log('id recieved : ' , id )
            const updated = await Advertisement.findByIdAndUpdate(id,{
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                features: req.body.features,
                postedbyid:req.body.postedbyid,
                startsOn:req.body.startsOn,
                endsOn:req.body.endsOn,
                statusid:req.body.statusid,
                typeid:req.body.typeid,
                categoryid:req.body.categoryid,
                cityareaid:req.body.cityareaid,
                image : ( req?.file?.filename || null )
              
            });
            if (updated) return res.status(201).json( updated)
                return res.status(400).json({ msg: 'Unable to update Advertisement'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }
      async removeAdvertisement(req,res){
        try{ 
            const id = req.params.id
            const removed = await Advertisement.findByIdAndDelete(id)
            if (removed) return res.status(201).json({"Removed":removed})
                return res.status(400).json({ msg: 'Unable to remove Advertisement'})
          
        } 
        catch(error){
            console.log(error)
            res.status(500).json({msg: error.message })
        } 
      }

     
    
}
const AdvertisementHandler = new advertisementHandler()
module.exports = AdvertisementHandler

