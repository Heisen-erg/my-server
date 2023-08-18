const { Schema } = require("mongoose");
const mongoose = require("mongoose")
const user = new Schema(
    {
        name: {
            
            type:String
        },
        email:{
            
            type:String
        }
    });

const Data = new mongoose.model("userdata",user)

module.exports = Data;