import mongoose from "mongoose";

var employeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    addr:{
        type:String
    }
});

const Employee = mongoose.model("Employee",employeeSchema);
export default Employee;