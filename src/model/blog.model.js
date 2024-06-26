const mongoose = require("mongoose")

const blog_Schema = mongoose.Schema(
    {
        // key
        blog_topic: {
            type:String,
            trim:true
        },
        blog_author:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    })

const blog = mongoose.model("Blog",blog_Schema)

module.exports = blog