const mongoose = require("mongoose")

const bird_Schema = mongoose.Schema(
    {
        // key
        bird_name: {
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

const bird = mongoose.model("Bird",bird_Schema)

module.exports = bird