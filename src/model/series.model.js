const mongoose = require("mongoose")

const series_Schema = mongoose.Schema(
    {
        // key
        series_name: {
            type:String,
            trim:true
        },
        series_ep:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const series = mongoose.model("Series",series_Schema)

module.exports = series