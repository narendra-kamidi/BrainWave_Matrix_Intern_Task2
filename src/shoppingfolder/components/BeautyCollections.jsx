
import React from 'react';
import { useCart } from '../context/CartContext';

const BeautyCollections = ({ beautyFashion }) => {
  const { title, products } = beautyFashion; // Destructure products array
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyCollections;