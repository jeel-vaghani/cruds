const mongoose = require("mongoose")

const zoo_Schema = mongoose.Schema(
    {
        // key
        animal_name: {
            type:String,
            trim:true
        },
        enter_date:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const zoo = mongoose.model("Zoo",zoo_Schema)

module.exports = zoo