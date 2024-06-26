const mongoose = require("mongoose")

const car_Schema = mongoose.Schema(
    {
        // key
        car_name: {
            type:String,
            trim:true
        },
        price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const car = mongoose.model("Car",car_Schema)

module.exports = car