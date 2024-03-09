import React, { useState } from 'react';
import './LoginSignup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginSignup = () => {
  const [inputs, setInputs] = useState({
    Name: '',
    Email: '',
    Password: ''
  });

  const [formValid, setFormValid] = useState(false); // State to track form validity

  const inputHandler = event => {
    const { name, value } = event.target;
    setInputs(prevState => ({ ...prevState, [name]: value }));

    // Check if all fields are filled to set form validity
    setFormValid(inputs.name !== '' && inputs.email !== '' && inputs.password !== '');
  };

  const submitHandler = event => {
    // event.preventDefault();
    console.log("Clicked");
    if (formValid) {
      axios.post("http://localhost:3005/lnew", inputs)
        .then(response => {
          alert("Signup Successful");
          // Redirect or handle success accordingly
        })
        .catch(error => console.error('Error during signup:', error));
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="Name" value={inputs.Name} onChange={inputHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="Email" value={inputs.Email} onChange={inputHandler} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="Password" value={inputs.Password} onChange={inputHandler} required />
        </div>
        {formValid ? (
          <Link to="/s">
            <button type="submit" onClick={submitHandler}>Sign Up</button>
          </Link>
        ) : (
          <button type="submit" disabled>Sign Up</button>
        )}
      </form>
      <p>Already have an account? <Link to="/l">Login Here</Link></p>
    </div>
  );
};

export default LoginSignup;