const mongoose = require("mongoose")

const anime_Schema = mongoose.Schema(
    {
        // key
        anime_name: {
            type:String,
            trim:true
        },
        anime_author:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    })

const anime = mongoose.model("Anime",anime_Schema)

module.exports = anime