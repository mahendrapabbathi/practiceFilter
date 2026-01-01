import { Heart, ShoppingCart, User } from 'lucide-react'
import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const NavbarTwo = () => {

    const {token, setToken, navigate, backendUrl,getCartCount, setCartItems} = useContext(ShopContext);

  const logout = async () =>{
    navigate('/login');
    localStorage.removeItem('token');
    setToken(null);
    setCartItems({})
  }

  return (
    <div className='hidden sm:flex justify-between py-4 border-b px-24 '>
      <h1 onClick={()=>navigate('/')} className='text-2xl font-bold cursor-pointer'>Shoeshy</h1>
      <div className='flex gap-8 items-center'>
        <div className='flex gap-4'>
            <Heart className='cursor-pointer'/>
            <div className='relative'>
              <Link to={'/cart'}><ShoppingCart className='cursor-pointer'/></Link>
              <div className=' bg-black text-xs rounded-full text-white flex justify-center items-center w-4 h-4 absolute -bottom-0 -right-1 '>{getCartCount()}</div>
            </div>
            <User className='cursor-pointer' />
        </div>

        <button onClick={logout} className='border px-4 py-1 rounded text-white bg-black hover:bg-gray-900 cursor-pointer'>{token ? "Logout" : "Sign Up"}</button>
      </div>
    </div>
  )
}

export default NavbarTwo
