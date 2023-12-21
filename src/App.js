import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
// import Cart from './components/Cart'
import Login from './components/Login'
function App() {
  
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Product</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
           
            <ul>
          {/* ... other nav links */}
          
        </ul>
          </ul>
        </nav>
        <Routes>
         
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store/>} />
          <Route path="/login" component={<Login/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


