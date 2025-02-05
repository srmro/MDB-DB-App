import express, { request } from 'express'
import Service from "../models/service-model.js"
import { Router } from 'express'
import Availability from '../models/availability-model.js';


const router = Router();


router.get("/service", async (req, res) => {
    try {
        const service = await Service.find()
        res.status(200).send(service)
    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
})


router.get("/service/:id", async (req, res) => {

    try {
        const service = await Service.findById();

        const query = { _id: isObjectId(req.params.id) }
        const result = await Service.findOne(query)
        res.status(200).send(result);
    } catch (error) {
        if (!result) res.status(404).send({ msg: "Not Found" })

    }

})

router.post("/service", async (req, res) => {
    try {

        const { body } = request
        const service = await Service.create(req.body);
        res.status(200).send(service)
    } catch {
        res.status(500).send({ message: error.message });
    }
});



router.put("/service/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const service = Service.findByIdAndUpdate(id, req.body);

        if (!service) {
            return res.status(404).send({ msg: "Not Found" });
        }

        const updatedService = await Service.findById(id)
        res.status(200).send(updatedService);

    } catch {
res.status(500).send({ msg: error.message });

    }
})




router.delete("/service/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByIdAndDelete(id);

        if (!service) {
            return res.status(400).send({ msg: "Not Found" })
        }

        res.status(200).send({ msg: "Deleted" });

    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

export default router