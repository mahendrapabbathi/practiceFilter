import { Heart, ShoppingCart, User } from 'lucide-react'
import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const NavbarTwo = () => {

    const {token, setToken, navigate, backendUrl,getCartCount} = useContext(ShopContext);

  const logout = async () =>{
    try {
      const response = await axios.post(`${backendUrl}/api/user/logout`);
    if(response.data.success){
      setToken(null);
      localStorage.removeItem("token")
      navigate('/login')
      toast.success(response.data.message)
    }else{
      toast.error(response.data.error)
    }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='hidden sm:flex justify-between py-4 border-b px-24 '>
      <h1 onClick={()=>navigate('/')} className='text-2xl font-bold cursor-pointer'>Shoeshy</h1>
      <div className='flex gap-8 items-center'>
        <div className='flex gap-4'>
            <Heart className='cursor-pointer'/>
            <div className='relative'>
              <ShoppingCart className='cursor-pointer '/>
              <div className=' bg-black rounded-full text-white flex justify-center items-center w-4 h-4 absolute -bottom-0 -right-1 '>{getCartCount()}</div>
            </div>
            <User className='cursor-pointer' />
        </div>

        <button onClick={logout} className='border px-4 py-1 rounded text-white bg-black hover:bg-gray-900 cursor-pointer'>{token ? "Logout" : "Sign Up"}</button>
      </div>
    </div>
  )
}

export default NavbarTwo
