import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  token: {
    type: Number,
    min :1,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['waiting', 'ready', 'delivered'],
    default: 'waiting',
  },
});

export const Order = mongoose.model('Order', orderSchema);
