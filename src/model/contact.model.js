const mongoose = require("mongoose")

const contact_Schema = mongoose.Schema(
    {
        // key
        contact_name: {
            type:String,
            trim:true
        },
        contact_num:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const contact = mongoose.model("Contact",contact_Schema)

module.exports = contact