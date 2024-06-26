const mongoose = require("mongoose")

const seasons_Schema = mongoose.Schema(
    {
        // key
        seasons_name: {
            type:String,
            trim:true
        },
        month:{
            type:Number,
            default:1
        }
    },
    {
        timestamps: true
    })

const seasons = mongoose.model("Seasons",seasons_Schema)

module.exports = seasons