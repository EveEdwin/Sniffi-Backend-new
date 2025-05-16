import axios from 'axios';
import { BASE_URL } from '../constants/config';

const instance = axios.create({
  baseURL: `${BASE_URL}/features`,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const createFeatures = async (data) => {
  return instance.post('/', data);
};

export const getAllFeatures = async () => {
  return instance.get('/');
};

export const deleteAllFeatures = async () => {
  return instance.delete('/');
};