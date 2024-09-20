import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import './Signin.css'
import { UserContext } from '../../Context/Context';

function Signin () {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
    setName(e.target.value);
    setEmail(e.target.value);
    
};
 
//  function NotAuser(){
//       alert(`Not a Valid`);
 //}
 
  return (
    <div>

        <div className='loginsignup-container'>
      <div className='login-container'>
         <h1>LOGIN</h1>
         <form onSubmit={handleSubmit} className='loginsignup-fields'>
         <input
              type='text'
              name="username"
              placeholder='John'
              value={name}
              required
            />
            <input
              type='email'
              name="email"
              placeholder='XYZ@gmail.com'
              value={email}
               required
            />
            <input
              type='password'
              name="password"
              placeholder='*******'
              required
            />
         <Link to='/login'><button type='submit'>Login</button></Link>


         </form>
         </div>
          </div>
          </div>
 
    
  )
}

export default Signin
