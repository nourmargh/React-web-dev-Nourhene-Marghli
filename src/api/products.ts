import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data.products;
};