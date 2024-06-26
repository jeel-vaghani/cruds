const mongoose = require("mongoose")

const actor_Schema = mongoose.Schema(
    {
        // key
        actor_name: {
            type:String,
            trim:true
        },
        fees_per_ep:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const actor = mongoose.model("Actor",actor_Schema)

module.exports = actor