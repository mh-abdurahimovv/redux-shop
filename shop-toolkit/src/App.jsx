import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Cart from './components/Cart';
import ProductCard from './components/ProductCard';
import RootLayout from './components/RootLayout';
import ProductDetail from './components/ProuctDetail';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
      <Route index element={<ProductCard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/about/:productId" element={<ProductDetail />}></Route>
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;




