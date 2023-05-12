import employeeController from './app/controllers/employeeController.js'
import express from 'express'
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://admin:admin@cluster0.j4rcxtj.mongodb.net/?retryWrites=true&w=majority")
   .then(() => {
    console.log('Connection to database!')
   })
   .catch((error) => {
    console.log(error)
   })

const app = express();

app.use('/employee',employeeController)
app.listen(8080, () => console.log("listening port on 8080"))