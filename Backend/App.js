const express = require ('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require("cors");
const path = require("path");


var corsOptions = {
    origin:"http://localhost:5173",
    method:"POST,GET,PUT,DELETE",
    Credential:true,
}
app.use(cors(corsOptions))

  //Multer

app.use (express.json({limit:'2mb'}))
app.use(express.urlencoded({limit:'2mb',extended:true}))
app.use('/public/images',express.static(path.join(__dirname,'public/images')))

const  AdvertisementCategoriesRouter = require('./Router/AdvertisementCategories.route')
const AdvertisementStatusesRouter = require('./Router/AdvertisementStatues.route')
const  AdvertisementTypeRouter = require('./Router/AdvertisementType.route')
const  CitiesRouter= require('./Router/Cities.route')
const CityAreaRouter= require('./Router/CityArea.route')
const  CountriesRouter = require('./Router/Countries.route')
const ProvincesRouter = require('./Router/Provinces.route')
const  RoleRouter  = require('./Router/Role.route')
const  UsersRouter = require('./Router/Users.route');
const AdvertisementRouter = require('./Router/Advertisement.route');



//  For url or java form in postman---
app.use (express.json())
app.use (express.urlencoded({extended:true}))


// create path to find controllers data and use in postman
app.use('/api/v1/advertisement',AdvertisementRouter);
app.use('/api/v1/categories',AdvertisementCategoriesRouter)
app.use('/api/v1/status',AdvertisementStatusesRouter)
app.use('/api/v1/types', AdvertisementTypeRouter)
app.use('/api/v1/cities', CitiesRouter)
app.use('/api/v1/cityarea',CityAreaRouter)
app.use('/api/v1/countries', CountriesRouter)
app.use('/api/v1/provinces',ProvincesRouter)
app.use('/api/v1/roles', RoleRouter)
app.use('/api/v1/users', UsersRouter)





// check if donot find data say page not found
app.get('*',(req,res)=>{
    res.status(404).json({msg: 'page not found'})
});

const port = process.env.PORT
const host = process.env.HOST


async function connectDB(){
    await mongoose.connect(process.env.CON_STR)
}
connectDB().then(()=>{
    app.listen(port,host,()=>{
        console.log(`App is running on http://${host}:${port}`)
    })
}).catch((error)=>{
    console.log(`Error Connecting to Database: ${error}`)
});
    
