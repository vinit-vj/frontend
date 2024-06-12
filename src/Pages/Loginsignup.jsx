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


import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' id='name' />
          <input type="email" placeholder='Email Address' id='email' />
          <input type="password" placeholder='Enter Password' id='password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='agree' id='agree' />
          <p>By Continuing, I Agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
