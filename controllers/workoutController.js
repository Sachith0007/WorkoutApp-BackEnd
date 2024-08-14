const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


//get all workouts
const getWorkouts = async (req,res)=>{
    const workouts1 = await Workout.find({}) .sort({createdAt:-1})

    res.status(200).json(workouts1)
}




//get a single workout
const getworkout = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)
}





//create a new workout
const createWorkout = async (req,res)=>{

    const{title,load,reps} = req.body  
    //add doc to db
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}




//delete a workout
const deleteWorkout = async (req,res)=>{

    const {id} = req.params
    //check id is valid or invalid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout =await Workout.findOneAndDelete({_id:id})  
    
    //check searched workout is available or not
    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)

}

//update a workout
const updateWorkout = async (req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout =await Workout.findOneAndUpdate({_id:id},{...req.body}) 

    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)

}





module.exports = {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout


}