const express = require('express')
const {createWorkout,getWorkouts,getworkout, deleteWorkout,updateWorkout} = require('../controllers/workoutController')


const router= express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id',getworkout) 


//post a new workout
router.post('/',createWorkout)


//delete a workout
router.delete('/:id',deleteWorkout) 



//update a workout
router.patch('/:id',updateWorkout) 


module.exports=router