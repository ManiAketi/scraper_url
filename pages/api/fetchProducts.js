// pages/api/fetchProducts.js
import axios from 'axios';

export default async function handler(req, res) {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
      query: 'Shoes',
      page: '1',
      country: 'IN'
    },
    headers: {
      'X-RapidAPI-Key': '8b7911bff8msh064c63b692e6e0fp18b7d7jsnd1a0f4eefae3',
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
