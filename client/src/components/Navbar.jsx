import { Heart, ShoppingCart, User } from 'lucide-react'
import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Navbar = ({search, setSearch}) => {

  const {token, setToken, navigate, backendUrl, getCartCount} = useContext(ShopContext);

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
    <div className='flex justify-between py-4  border-b px-16'>
      <div>
        <input onChange={(e)=>setSearch(e.target.value)} value={search} className='bg-gray-100 px-2 rounded py-1 outline-gray-500' type="text" placeholder='Enter your search shoes' />
      </div>

      <div className='flex gap-8'>
        <div className='flex gap-4'>
            <Heart className='cursor-pointer'/>
            <div className='relative'>
              <Link to={'/cart'}><ShoppingCart className='cursor-pointer'/></Link>
              <div className=' bg-black text-xs rounded-full text-white flex justify-center items-center w-4 h-4 absolute bottom-1 -right-1 '>{getCartCount()}</div>
            </div>
            <User className='cursor-pointer' />
        </div>

        <button onClick={logout} className='border px-4 rounded text-white bg-black hover:bg-gray-900 cursor-pointer'>{token ? "Logout" : "Sign Up"}</button>
      </div>
    </div>
  )
}

export default Navbar
