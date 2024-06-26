const mongoose = require("mongoose")

const medical_Schema = mongoose.Schema(
    {
        // key
        medicine: {
            type:String,
            trim:true
        },
        medicine_id:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const medical = mongoose.model("Medical",medical_Schema)

module.exports = medical