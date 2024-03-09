import mongoose from 'mongoose';

// Define DeliveredOrder schema
const deliveredOrderSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create DeliveredOrder model
export const DeliveredOrder = mongoose.model('DeliveredOrder', deliveredOrderSchema);
