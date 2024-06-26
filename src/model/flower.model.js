const mongoose = require("mongoose")

const flower_Schema = mongoose.Schema(
    {
        // key
        flower_name: {
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

const flower = mongoose.model("Flower",flower_Schema)

module.exports = flower