const mongoose = require("mongoose")

const area_Schema = mongoose.Schema(
    {
        // key
        area_name: {
            type:String,
            trim:true
        },
        population:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const area = mongoose.model("Area",area_Schema)

module.exports = area