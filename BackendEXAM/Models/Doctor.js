import {model} from "mongoose";
import {Schema} from "mongoose";


const DoctorSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String },   
    time: { type: Number }
});

const Doctor = model("Doctor", DoctorSchema);

export {Doctor};




