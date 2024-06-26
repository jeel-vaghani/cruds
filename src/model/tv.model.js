const mongoose = require("mongoose")

const tv_Schema = mongoose.Schema(
    {
        // key
        tv_name: {
            type:String,
            trim:true
        },
        tv_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const tv = mongoose.model("Tv",tv_Schema)

module.exports = tv