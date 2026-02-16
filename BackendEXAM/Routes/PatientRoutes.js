import {Router} from "express";
import {Patient} from "../Models/Patient.js"
import {Doctor} from "../Models/Doctor.js";

const router=Router()

router.post('/registration', async (req, res) => {
    try {
        const newPatient = new Patient({
            name: req.body.name,
           date:req.body.date,
            age: req.body.age,
            time: req.body.time
        });
        await newPatient.save();
        res.status(201).json(newPatient);
        
    } 
    catch (error) {
        console.error('Error creating Patientregistration:', error);
        res.status(400).json({ error: 'Bad Request' });
    }
});


router.get('/Doctordetails', async (req, res) => {
    try {
        
        const doctors = await Doctor.find();
        res.json(doctors);
        
    } catch (error) {
        console.error('Error fetching details of doctors:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


 export {router}