import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Ladies, Gents, Children, Furniture, Beauty } from '../data';

const allProducts = [
  ...Ladies.products,
  ...Gents.products,
  ...Children.products,
  ...Furniture.products,
  ...Beauty.products
];

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query')?.toLowerCase() || '';

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="search-results-page">
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`} 
              className="product-card-link"
            >
              <div className="product-card">
                <img 
                  src={process.env.PUBLIC_URL + '/' + product.image} 
                  alt={product.name} 
                />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
