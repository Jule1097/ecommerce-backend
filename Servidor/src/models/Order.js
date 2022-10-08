import {Schema, model} from "mongoose";

const orderSchema = new Schema ({
  items: [{
    name: String,
    price: Number,
    quantity: Number,
    _id: false
  }],
  subtotal: Number,
  taxes: Number,
  total: Number,
  date: Date
},{
  timestamps: true,
  versionKey: false  
})

export default model('Order', orderSchema);