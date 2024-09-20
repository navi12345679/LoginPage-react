import './App.css'
import React from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Signin from './Components/Signin/Signin.jsx';
import Display from './Components/Display/Display.jsx';
import { UserProvider } from './Context/Context.jsx';

function App() {
  
    return (
      <>
      <UserProvider>
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<Signin value ={UserProvider}/>} />
          <Route path='/login' element={<Display value ={UserProvider}/>}>
          </Route>
        </Routes>  
    </BrowserRouter>
    </UserProvider>
      </>
    );
  
}

export default App;
      
        
 