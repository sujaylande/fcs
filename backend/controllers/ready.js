import { WaitingOrder } from '../models/waiting.js';
import { ReadyOrder } from '../models/ready.js';

// Function to move token from waiting to ready array
export const moveFromWaitingToReady = async (req, res) => {
    const { token } = req.body;
  
    try {
      // Check if token exists in waiting array
      const tokenExistsWaiting = await WaitingOrder.exists({ token });
  
      if (!tokenExistsWaiting) {
        return res.status(400).json({ message: 'Token does not exist in waiting array, Invalid Token!' });
      }
  
      // Remove token from waiting array and add it to ready array
      await WaitingOrder.findOneAndDelete({ token });
      await ReadyOrder.create({ token });
  
      return res.status(200).json({ message: 'Your order is ready!' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  