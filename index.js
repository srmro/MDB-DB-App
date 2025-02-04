import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());


const PORT = 3020;

mongoose.connect(process.env.CUALQUIER_URL);
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

