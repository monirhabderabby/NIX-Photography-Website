import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Packages from './Components/Packages/Packages';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';
import { useState } from 'react';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import RequireAuth from './Components/RequreAuth/RequireAuth';

function App() {
  const [buyPackage, setPackage] = useState({})
  const checkOut = data => {
    setPackage(data)
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={(<Header></Header>)}></Route>
          <Route path='/packages' element={<Packages checkOut={checkOut}></Packages>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout buyPackage={buyPackage}></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
