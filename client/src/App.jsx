import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import { ShopContext } from './context/shopContext'

const App = () => {

  const {token} = useContext(ShopContext);

  return (
    <div>
      <Routes>
        {
          !token &&
          <Route path='/login' element={<Login />} /> 
        }
        <Route path='/' element={<Home />} />
        
      </Routes>
    </div>
  )
}

export default App
