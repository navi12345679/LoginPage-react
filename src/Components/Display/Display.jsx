import React, { useContext } from 'react';
import './Display.css';
import { UserContext } from '../../Context/Context';

const Display = () => {
  const updateUser  = useContext(UserContext);

  return (
    <div className='display-container'>
      <h1>Your Login has been Successful</h1>
     { updateUser.name && updateUser.email  ?
      (
        <p>
          Name: {updateUser.name}<br />
          Email: {updateUser.email}
        </p>): (
        <p>No user logged in yet.</p>
  )
} 
    </div>
  );
}

export default Display;
