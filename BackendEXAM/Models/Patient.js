import {model} from "mongoose";
import {Schema} from "mongoose";


const PatientSchema=new Schema({
    name: { type: String, required: true },
    date:{type:Date},
    age:{type:Number},
    time: { type: Number }
})

const Patient=model("Patient",PatientSchema)
export{Patient}

