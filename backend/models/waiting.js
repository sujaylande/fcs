import mongoose from 'mongoose';

// Define WaitingOrder schema
const waitingOrderSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create WaitingOrder model
export const WaitingOrder = mongoose.model('WaitingOrder', waitingOrderSchema);
