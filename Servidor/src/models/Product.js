import {Schema, model} from "mongoose";

const productSchema = new Schema ({
    name: String,
    price: Number,
    image: String,
    stock: Number,
    category: String,
    quantity: Number
},{
  timestamps: true,
  versionKey: false  
})

export default model('Product', productSchema);