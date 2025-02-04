import express, { response } from "express";
import mongoose from "mongoose";


const app = express();

app.use(express.json());


const PORT = 3020;

mongoose.connect('mongodb+srv://romero:loca4321@cualquier.ns93v.mongodb.net/Cualquier-Cosa?retryWrites=true&w=majority&appName=Cualquier')
try {
    console.log('Connected to Cualquier Cosa');
} catch(error){
console.error(error);
}

app.listen(PORT,() => {
    console.log(`Port is running on ${PORT}...`);
});

app.get("/", (req, res) =>{
    res.status(201).send({greeting:"Welcome!"})
})

