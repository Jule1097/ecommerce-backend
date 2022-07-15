import {Schema, model} from "mongoose";

const productSchema = new Schema ({
    name: String,
    price: Number,
    image: String,
    stock: Number,
    category: String,
},{
  timestamps: true,
  versionKey: false  
})

export default model('Product', productSchema);