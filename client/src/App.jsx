import React, { useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import { ShopContext } from './context/shopContext'
import ProductDetails from './pages/ProductDetails'
import NavbarTwo from './components/NavbarTwo'

const App = () => {

  const {token} = useContext(ShopContext);
  const location = useLocation()

  return (
    <div>
      {location.pathname !== '/' ? <NavbarTwo /> : <></>}
      <Routes>
        {
          !token &&
          <Route path='/login' element={<Login />} /> 
        }
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        
      </Routes>
    </div>
  )
}

export default App
