import {Router} from "express";
import { Patient } from "../Models/Patient.js";
import {Doctor} from "../Models/Doctor.js"


const doc=Router()


doc.post('/registration', async (req, res) => {
    try {
        const newDoctor = new Doctor({
            name: req.body.name,
            category: req.body.category,
            time: req.body.time
        });

        await newDoctor.save();   

        res.status(201).json(newDoctor);
        
    } catch (error) {
        console.error('Error creating Doctor registration:', error);
        res.status(400).json({ error: 'Bad Request' });
    }
});








doc.get('/patientdetails', async (req, res) => {
    try {
        
        const Patients = await Patient.find();
        res.json(Patients);
        
    } catch (error) {
        console.error('Error fetching details of patients:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

doc.delete('/cancelAppointment/:id', async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);

        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        res.json({ message: "details cancelled successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


 

// doc.patch("/update",acync(req,res=>{
//     try{
//         const Patients = await Patient.findone(name:req.params.name);
//         res.json(Patients);

//         if(req.body.name=="undefined")|| Patient.name:req.body.name)
//         if(req.body.date=="undefined")|| Patient.date:req.body.date)    
//         if(req.body.age=="undefined")|| Patient.age:req.body.age)
//         if(req.body.age=="undefined")|| Patient.age:req.body.age)
            
//             await Patient.save();
//         res.status(201).json(Patients);




//     }
// }))




 export{doc}