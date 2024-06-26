const mongoose = require("mongoose")

const school_Schema = mongoose.Schema(
    {
        // key
        school_name: {
            type:String,
            trim:true
        },
        class:{
            type:Number
        }
    },
    {
        timestamps: true
    })

const school = mongoose.model("School",school_Schema)

module.exports = school