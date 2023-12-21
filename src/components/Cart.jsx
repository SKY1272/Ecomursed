// Cart.js

import React from 'react';

const Cart = ({ cartItems, removeItem }) => {
  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  return (
    <div className="cart-dropdown">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="50" />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${calculateTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

