import React, { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import { ShopContext } from './context/shopContext'
import ProductDetails from './pages/ProductDetails'
import NavbarTwo from './components/NavbarTwo'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

const App = () => {

  const {token} = useContext(ShopContext);
  const location = useLocation()

  return (
    <div>
      {location.pathname !== '/' ? <NavbarTwo /> : <></>}
      <Routes>
         <Route
          path='/login'
          element={token ? <Navigate to='/' /> : <Login />}
        />
        
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-orders' element={<Orders />} />
        
      </Routes>
    </div>
  )
}

export default App
