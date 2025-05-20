import axios from 'axios';
import { BASE_URL } from '../constants/config';

export const createFeatures = async (benefits) => {
  try {
    const response = await axios.post(
    `${BASE_URL}/api/features`,
      benefits,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in createFeatures:', error.response?.data || error.message);
    throw error;
  }
};
