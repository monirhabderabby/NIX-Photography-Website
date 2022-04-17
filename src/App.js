import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Packages from './Components/Packages/Packages';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/packages' element={<Packages></Packages>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
