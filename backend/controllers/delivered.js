// Import any necessary models or libraries
import { ReadyOrder } from '../models/ready.js';
import { DeliveredOrder } from '../models/delivered.js';

// Function to move token from ready to delivered array
export const moveFromReadyToDelivered = async (req, res) => {
  const { token } = req.body;

  try {
    // Check if token exists in ready array
    const tokenExistsReady = await ReadyOrder.exists({ token });

    if (!tokenExistsReady) {
      return res.status(400).json({ message: 'Token does not exist in ready array, Invalid Token!' });
    }

    // Remove token from ready array and add it to delivered array
    await ReadyOrder.findOneAndDelete({ token });
    await DeliveredOrder.create({ token });

    return res.status(200).json({ message: 'Your order is delivered, Please Visite Again!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
