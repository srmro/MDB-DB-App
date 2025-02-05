import mongoose from "mongoose";

const ServiceSchema =  new mongoose.Schema({

    name:{
        type: String,
        required: true
    },


    roomNumber:{
        type: Number,
        required: true
    },

    service:{
        type: String,
        required: true,
        enum:[
            "Room Refresh",
            "More Pillows", 
            "Maintenance", 
            "Shuttle to Airport"
        ]
    },

    custom: {
        type: String,
        required: false,
        maxLength: [120, "No more than 120 characters"]
    }

},

{
    timestamps:true
}

)


const Service = mongoose.model("Service", ServiceSchema);

export default Service