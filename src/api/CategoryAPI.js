import axios from "axios";

const BASE_URL = 'https://dummyjson.com/products'; // Replace with your actual API link

export const getCategoryData = async () =>{
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
}