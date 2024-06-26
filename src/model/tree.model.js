const mongoose = require("mongoose")

const tree_Schema = mongoose.Schema(
    {
        // key
        tree_name: {
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

const tree = mongoose.model("Tree",tree_Schema)

module.exports = tree