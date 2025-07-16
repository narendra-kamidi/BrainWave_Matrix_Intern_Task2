import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price?.replace(' INR', '').trim() || '0');
    return total + price * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <h2>Your Cart</h2>
        <p>Your cart is empty. Start adding some amazing products!</p>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>
                Total:{' '}
                {(
                  (parseFloat(item.price?.replace(' INR', '').trim()) || 0) * item.quantity
                ).toFixed(2)}{' '}
                INR
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-from-cart-btn"
                title="Remove from cart"
              >
                <FaTrashAlt size={16} color="#cc0000" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        <p>Subtotal: {totalPrice.toFixed(2)} INR</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
