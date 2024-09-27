import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Signin.css'

function Signin (props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleLogin (e) {
        e.preventDefault();
        const hardcodedUsername = {props};
        const hardcodedPassword = {props};

        
    const username = e.target.value;
    const password = e.target.value;

    if (username === '' || password === '') {
        setError('Must Enter username and password');
    } else if (username === hardcodedUsername && password === hardcodedPassword) {
        setError('');
        alert('Login successful!'); 
    } else {
        setError('Invalid username or password');
    }
}

    return (
        <div className='loginsignup-container'>
            <h1>Login</h1>
            <form   className='login-container'>
                <div className='loginsignup-fields'>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(props.username)}
                            required
                        />
                    </label>
                </div>
                <div className='loginsignup-fields'>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(props.password)}
                            required
                        />
                    </label>

                </div>
                {error &&<div style={{ color: 'red' }}>{error}</div>}
                <Link to='/home'><button  onSubmit={() =>handleLogin()} className='submit-button' type='submit'>Login</button></Link>

            </form>
        </div>
    
  );
};


export default Signin
