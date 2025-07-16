import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalCartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <header className='headerSection'>
      <div className='header-left'>
        <Link to="/" className='logo-link'>
          <h1 className='site-title'>E-Mart</h1>
        </Link>
      </div>

      <nav className='header-center'>
        <ul className='main-nav'>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/children">Children</Link></li>
          <li><Link to="/beauty">Beauty</Link></li>
          <li><Link to="/furniture">Furniture</Link></li>
        </ul>
      </nav>

      <div className="header-right">
        <form onSubmit={handleSearch} className="search-container">
          <input
            type='text'
            placeholder='Search here...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-input'
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <Link to="/signup&signin" className="utility-link">
          <FaUser className="nav-icon" />
          <span>Sign In / Sign Up</span>
        </Link>

        <Link to="/cartpage" className="utility-link cart-link">
          <FaShoppingCart className="nav-icon" />
          {totalCartItems > 0 && <span className="cart-count">{totalCartItems}</span>}
        </Link>

        <Link to="/about" className="utility-link about-link">
          <span>About</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
