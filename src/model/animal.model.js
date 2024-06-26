const mongoose = require("mongoose")

const animal_Schema = mongoose.Schema(
    {
        // key
        animal_name: {
            type:String,
            trim:true
        },
        life_span:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const animal = mongoose.model("Animal",animal_Schema)

module.exports = animal