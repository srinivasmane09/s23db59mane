const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({
tiger_color: String,
tiger_breed: String,
tiger_price: Number
})
module.exports = mongoose.model("tiger",tigerSchema)