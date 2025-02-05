import express from 'express'
import {Guest} from "../models/guest-model.js"
import { Router } from 'express'

const router = Router();

router.get("/guest", async (req, res) => {
    try {
        const guest = await Guest.find()
        res.status(200).send(guest)
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }

})

router.get("/guest/:id", async (req, res) => {

})


router.post("/guest", async (req, res) => {
    try {

        const { id } = req.params;
        const guest = await Guest.create(req.body);
        res.status(200).send(guest)

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.put("/guest/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const guest = Guest.findByIdAndUpdate(id, req.body);
        if (!guest) {
            return res.status(404).send({ msg: "Not Found" });
        }

        const updatedGuest = await Guest.findById(id)
        res.status(200).send(updatedGuest);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

});

router.delete("/guest/:id", async (req, res) => {
    try{
       const { id } = req.params;
       const  guest = await Guest.findByIdAndDelete(id);

       if(!guest){
        return res.status(400).send({msg: "Not Found"})
       }

       res.status(200).send({ msg: "Deleted"});

    } catch (error) {
        res.status(500).send({msg: error.message});
    }

});

export default router