import express ,{json} from "express";
import {router} from "./Routes/PatientRoutes.js"
import dotenv from "dotenv";
import {doc} from "./Routes/DoctorRoute.js";
import mongoose from "mongoose";

dotenv.config();
const app=express();
app.use(json());

app.use('/doctor',doc)
app.use('/patient',router)

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/EXAM';

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('not connected to MongoDB',err));

const PORT=process.env.PORT || 5000 

app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`); 

});


