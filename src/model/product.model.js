const mongoose = require("mongoose")

const product_Schema = mongoose.Schema(
    {
        // key
        product_name: {
            type:String,
            trim:true
        },
        product_info:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    })

const product = mongoose.model("Product",product_Schema)

module.exports = product