const mongoose = require("mongoose")

const stationary_Schema = mongoose.Schema(
    {
        // key
        product_name: {
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

const stationary = mongoose.model("Stationary",stationary_Schema)

module.exports = stationary