const mongoose = require("mongoose")

const pet_Schema = mongoose.Schema(
    {
        // key
        pet_name: {
            type:String,
            trim:true
        },
        pet_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const pet = mongoose.model("Pet",pet_Schema)

module.exports = pet
