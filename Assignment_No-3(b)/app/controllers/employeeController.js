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
//Update
router.put("/:id",jsonParser,async(req,res)=>{
    console.log(req.params.id)
    Employee.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            addr:req.body.addr,
        }
    })
    .then(result=>{
        res.status(200).json({

            message:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})
//Delete
router.delete("/:id",jsonParser,(req,res)=>{
    Employee.findByIdAndRemove({_id:req.params.id})
    .then(result=>{
       res.status(200).json({
           message:"Deleted",
           result:result
       })
    })
    .catch(err=>{
       res.status(500).json({
           error:err
       })
    })
})

export default router;