import express, { request, response } from 'express'
import Availability from "../models/availability-model.js"
import { Router } from 'express'


const router = Router();

router.get("/availability", async(req, res) => {
    try {
        const availability = await Availability.find()
        res.status(200).send(availability)
    } catch (error) {
        res.status(500).send({ msg: error.message });
    };

});

router.get("/availability/:id", async(req, res) => {
    try {
        const availability = await Availability.findById();

        const query = { _id: isObjectId(req.params.id) };
        const result = await Availability.findOne(query);
        res.status(200).send(result);
    } catch (error) {
        if (!result) res.status(404).send({ msg: "Not found" })
    }

});


router.post("/availability", async(req, res) => {
    try {
        const { body } = request
        const availability = await Availability.create(req.body);
        res.status(200).send(availability)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }


});


router.put("/availability/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const availability = Availability.findByIdAndUpdate(id, req.body);

        if (!availability) {
            return res.status(404).send({ msg: "Not Found" });
        }

        const updatedAvailability = await Availability.findById(id)
        res.status(200).send(updatedAvailability);


    } catch (error) {
        res.status(500).send({ msg: error.message });

    }

});


router.delete("/availability/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const availability = await Availability.findByIdAndDelete(id);

        if (!availability) {
            return res.status(400).send({ msg: "Not Found" })
        }

        res.status(200).send({ msg: "Deleted" });

    } catch (error) {
        res.status(500).send({ msg: error.message });
    }
});

export default router