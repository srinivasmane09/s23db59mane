const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({
tiger_color: String,
tiger_breed: {type:String,length:15},
tiger_price: {type:Number,min:1000,max:200000}
})
module.exports = mongoose.model("tiger",tigerSchema)