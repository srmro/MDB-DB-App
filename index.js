import express, { response } from "express";
import mongoose from "mongoose";


const app = express();
const data = mongoose;

app.use(express.json());


const PORT = 3020;

app.listen(PORT,() => {
    console.log(`Port is running on ${PORT}...`);
});

app.get("/", (req, res) =>{
    res.status(201).send({greeting:"Welcome!"})
})

