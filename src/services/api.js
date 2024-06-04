export const fetchProducts = async () => {
  const response = await fetch('/api/j-application/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};
