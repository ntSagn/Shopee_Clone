// productApi.js
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com'; // Replace with your actual API link

export const getProductData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};

export const getLimitProductData = async (limit) => {
    try {
        const response = await axios.get(`${BASE_URL}/products?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
};