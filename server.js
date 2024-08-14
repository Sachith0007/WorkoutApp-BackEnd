require('dotenv').config()

const express=require('express')
const workoutRoutes= require('./routes/workouts')    //link to routes
const mongoose= require('mongoose')
const cors= require('cors')


//express app
const app=express();




app.use(cors());



//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})



//routes
app.use('/api/workouts',workoutRoutes)



//connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() =>{
    
    //listen for requests
app.listen(process.env.PORT,()=>{                 //(process.env.PORT mean, i already set the port in .env file and assign it to here. check .env
    console.log('connected to db & listening on port 4000!!!')
})
  })
  .catch((error) =>{
     console.log(error)
  })
  


//Define a route for the root URL ("/")
app.get('/',(req,res)=>{
    res.json({mssg:'welcome to the app'})
})


