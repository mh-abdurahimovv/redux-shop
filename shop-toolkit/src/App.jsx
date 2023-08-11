import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App



// import { BrowserRouter, Routes, Route } from 'react-router-dom';
  // <BrowserRouter BrowserRouter >
  // <Routes>
  //   <Route path="/" element={<Product />} />
  //   <Route path="/cart" element={<Cart />} />
  //   <Route path="/dashboard" element={<Dashboard />} />
  // </Routes>
  //   </BrowserRouter >
