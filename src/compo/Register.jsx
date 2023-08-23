import { useState } from "react";
import React from "react";


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters long.');
        return;
      }
  
      alert("please enter correct password");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label >Username:</label>
          <input type="text" id="username" placeholder="username" value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label >Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label >Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default Register;
  