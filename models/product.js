const mongoose = require("mongoose");
const Schema =  require("mongoose").Schema;

const ProductSchema = new Schema({
    id: String,
    name: String,
    price: Number,
    description: String,
    stock: Number,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    ProductSchema,
    Product,
};