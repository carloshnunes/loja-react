export const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.example.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching products. Please try again later.');
  }
};
