import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === id);

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product); // Add to cart
    // Navigate to cart page manually (programmatically if needed)
    window.location.href = '/cartpage';
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <p className="product-description">
          {product.description || 'No description available'}
        </p>
        <div className="product-detail-buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
