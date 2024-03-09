// Import any necessary models or libraries
import { WaitingOrder } from '../models/waiting.js';
import { ReadyOrder } from '../models/ready.js';
import { DeliveredOrder } from '../models/delivered.js';

// Function to add token to waiting array
export const addToWaiting = async (req, res) => {
  const { token } = req.body;

  try {
    // Check if token already exists in ready or delivered array
    const tokenExistsReady = await ReadyOrder.exists({ token });
    const tokenExistsDelivered = await DeliveredOrder.exists({ token });

    if (tokenExistsReady) {
      return res.status(400).json({ message: 'Token already exists and order is ready!' });
    } else if (tokenExistsDelivered) {
      return res.status(400).json({ message: 'Token already exists and order is delivered!' });
    }

    // Check if token already exists in waiting array
    const tokenExistsWaiting = await WaitingOrder.exists({ token });

    if (tokenExistsWaiting) {
      return res.status(400).json({ message: 'Token already exists in waiting array, Your order is being prepared, Pleace Wait!' });
    }

    // If token doesn't exist in any array, add it to waiting array
    await WaitingOrder.create({ token });
    return res.status(200).json({ message: 'Your order is being prepared, Pleace Wait!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

