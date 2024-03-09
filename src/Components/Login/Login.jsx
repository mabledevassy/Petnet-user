import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [inputs, setInputs] = useState({ "Name": '', "Password": '' })
  const navigate = useNavigate()

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  const checkData = async (event) => {
    event.preventDefault();

    // Simple validation check
    if (!inputs.Name || !inputs.Password) {
      alert('Please fill in all fields')
      return;
    }

    try {
      const response = await axios.post("http://localhost:3005/Login", {
        Name: inputs.Name,
        Password: inputs.Password,
      })

      if (response.data.success) {
        alert('Login successful');
        navigate('/s');
      } else {
        alert('Invalid username and password. Please try again.');
      }
    } catch (err) {
      alert('An error occurred during login. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="text"
            placeholder='Your Name'
            name='Name'
            value={inputs.Name}
            onChange={inputHandler}
          />
          <input
            type="password"
            placeholder='Password'
            name='Password'
            value={inputs.Password}
            onChange={inputHandler}
          />
        </div>
        <button onClick={checkData}>Login</button>
      </div>
    </div>
  )
}

export default Login