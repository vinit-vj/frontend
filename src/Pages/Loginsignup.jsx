// import React from 'react'
// import './CSS/LoginSignup.css'

// const Loginsignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Sign up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Your Name' />
//           <input type="email" placeholder='Email Adsress' />
//           <input type="password" placeholder='Enter Password' />
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id='' />
//           <p>By Continuing, I Agree to the terms and conditions.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Loginsignup


// // import React from 'react';
// // import './CSS/LoginSignup.css';

// // const LoginSignup = () => {
// //   return (
// //     <div className='loginsignup'>

// //     </div>
// //   );
// // };

// // export default LoginSignup;

// src/Loginsignup.js

// src/Loginsignup.js

import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import './CSS/LoginSignup.css';

const Loginsignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isAgreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.isAgreed) {
      alert('You must agree to the terms and conditions');
      return;
    }

    try {
      const response = await axiosInstance.post('/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error signing up:', error.response.data);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input 
              type="text" 
              name="name" 
              placeholder='Your Name' 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              type="email" 
              name="email" 
              placeholder='Email Address' 
              value={formData.email} 
              onChange={handleChange} 
            />
            <input 
              type="password" 
              name="password" 
              placeholder='Enter Password' 
              value={formData.password} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input 
            type="checkbox" 
            name="isAgreed" 
            checked={formData.isAgreed} 
            onChange={handleChange} 
          />
          <p>By Continuing, I Agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
