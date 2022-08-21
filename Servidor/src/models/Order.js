import {Schema, model} from "mongoose";

const orderSchema = new Schema ({
    name: String,
    price: Number,
    _id: String,
    quantity: Number
},{
  timestamps: true,
  versionKey: false  
})

export default model('Order', orderSchema);