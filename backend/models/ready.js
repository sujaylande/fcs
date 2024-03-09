import mongoose from 'mongoose';

// Define ReadyOrder schema
const readyOrderSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create ReadyOrder model
export const ReadyOrder = mongoose.model('ReadyOrder', readyOrderSchema);
