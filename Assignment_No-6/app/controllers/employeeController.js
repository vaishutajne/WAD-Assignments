import Employee from "../models/employeeModel.js";
import express from 'express'
import bodyParser from 'body-parser'
var jsonParser = bodyParser.json();
var router = express.Router();

router.post('/create',jsonParser,(req,res)=>{
    Employee.create(req.body);
    res.status(200).json({
        status:"success"
    })
})

router.get('/display',jsonParser,async(req,res)=>{

   const newEmp = await Employee.find();
   res.status(200).json({
    status:"success",
    data:{newEmp}
})

})

router.get('/search/:names',jsonParser,async(req,res)=>{
    const newemp = await Employee.find({name:req.params.names});

    res.status(200).json({
        status:"success",
        data:{newemp}
})

})
export default router;