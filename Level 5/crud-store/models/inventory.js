const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    item: {
        type: String,
        require: true
    },
    category: {
        type: String,
        enum: ['dairy', 'deli', 'produce', 'misc'],
        require: true
    },
    price: Number
}) 

module.exports = mongoose.model("Inventory", inventorySchema)