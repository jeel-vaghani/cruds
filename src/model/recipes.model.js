const mongoose = require("mongoose")

const recipes_Schema = mongoose.Schema(
    {
        // key
        recipes_name: {
            type:String,
            trim:true
        },
        recipes_cook:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    })

const recipes = mongoose.model("Recipes",recipes_Schema)

module.exports = recipes