// Login.js

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const handleLogin = (e) => {
    
  };

  return (
    <div>
      <h2>Login</h2>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

