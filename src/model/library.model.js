const mongoose = require("mongoose")

const library_Schema = mongoose.Schema(
    {
        // key
        reciver_name: {
            type:String,
            trim:true
        },
        book_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps: true
    })

const library = mongoose.model("Library",library_Schema)

module.exports = library