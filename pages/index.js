// pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [productUrl, setProductUrl] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('/api/fetchProducts');
        const products = response.data.data.products;
        if (products && products.length > 0) {
          setProductUrl(products[0].product_url);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Amazon Product URL</h1>
      {productUrl ? (
        <a href={productUrl} target="_blank" rel="noopener noreferrer">
          {productUrl}
        </a>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
