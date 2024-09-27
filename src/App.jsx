import './App.css'
import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/NavBar/NavBar.jsx';
import Form from './Components/Form/Form.jsx'
function App() {
  
    return (
      <>
     <BrowserRouter>
     <Navbar />
        <Routes>
        <Route path='/' element={<Signin username="Admin"  password="password"/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} >
        </Route>
        </Routes>  
    </BrowserRouter>
      </>
    );
  
}

export default App;
      
        
 