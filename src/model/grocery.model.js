const mongoose = require("mongoose")

const grocery_Schema = mongoose.Schema(
    {
        // key
        name: {
            type:String,
            trim:true
        },
        price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const grocery = mongoose.model("Grocery",grocery_Schema)

module.exports = grocery