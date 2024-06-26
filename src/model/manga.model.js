const mongoose = require("mongoose")

const manga_Schema = mongoose.Schema(
    {
        // key
        manga_name: {
            type:String,
            trim:true
        },
        manga_price:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const manga = mongoose.model("Manga",manga_Schema)

module.exports = manga