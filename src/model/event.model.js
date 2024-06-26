const mongoose = require("mongoose")

const event_Schema = mongoose.Schema(
    {
        // key
        event_type: {
            type:String,
            trim:true
        },
        event_venue:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    })

const event = mongoose.model("Event",event_Schema)

module.exports = event