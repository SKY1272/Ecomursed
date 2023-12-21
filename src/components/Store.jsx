import React, { useState } from 'react';
import './store.css';
// import Cart from './Cart';
import album1 from './assets/album1.png';
import album2 from './assets/album2.png';
import album3 from './assets/album3.png';
import album4 from './assets/album4.png';
import album5 from './assets/album5.png';
import album6 from './assets/album6.png'
import { FaFacebook, FaYoutube, FaSpotify } from 'react-icons/fa';

function Store() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const albums = [
    { id: 1, name: 'Album 1', price: 12, image: album1 },
    { id: 2, name: 'Album 2', price: 12, image: album2 },
    { id: 3, name: 'Album 3', price: 12, image: album3 },
    { id: 4, name: 'Album 4', price: 12, image: album4 },
    { id: 5, name: 'Album 5', price: 12, image: album5 },
    { id:6,  name: 'Album 6', price:12 ,   image:album6  }
    // { id: 6, name: 'Album 6', price: 12, image: album6 },
    // Add other albums with their details
  ];

  const addToCart = (album) => {
    const existingItem = cartItems.find((item) => item.id === album.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === album.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...album, quantity: 1 }]);
    }

    setCartCount(cartCount + 1); // Increment cart count
  };

  const removeItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);

    setCartCount(cartCount - 1); // Decrement cart count
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  return (
    <div className='storer'>
     
      <div className='image-container'>
     <h1>The Generics</h1>
      <div className="Main">
        {albums.map((album, index) => (
          <div key={index} className={`album${index + 1}`}>
            <h2>{album.name}</h2>
            <img src={album.image} alt={album.name} width='300' />
            <p>${album.price}</p>
            <button onClick={() => addToCart(album)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <button onClick={() => setShowCart(!showCart)} className='btn'>See cart ({cartCount})</button>
      </div>
      {showCart && (
        <div className="cart-navbar">
          <h3>Cart</h3>
          {cartItems.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} width='50' />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              {/* Here you can add quantity and other details */}
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${calculateTotal()}</p>
        </div>
      )}

      {/* Your Footer */}
      <div className="footer">
      <h2>The Generics</h2>
        <div className="footer-icons">
        <a href="https://www.facebook.com/your-facebook-page-url" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={30} color="blue" />
    </a>
    <a href="https://www.youtube.com/your-youtube-channel-url" target="_blank" rel="noopener noreferrer">
      <FaYoutube size={30} color="red" />
    </a>
    <a href="https://www.spotify.com/your-spotify-channel-url" target="_blank" rel="noopener noreferrer">
      <FaSpotify size={30} color="green" />
    </a>
        </div>
      </div>
    </div>
  )
}

export default Store;


