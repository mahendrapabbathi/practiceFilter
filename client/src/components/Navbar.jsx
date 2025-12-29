import { Heart, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = ({search, setSearch}) => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-between py-4  border-b px-16'>
      <div>
        <input onChange={(e)=>setSearch(e.target.value)} value={search} className='bg-gray-100 px-2 rounded py-1 outline-gray-500' type="text" placeholder='Enter your search shoes' />
      </div>

      <div className='flex gap-8'>
        <div className='flex gap-4'>
            <Heart className='cursor-pointer'/>
            <ShoppingCart className='cursor-pointer'/>
            <User className='cursor-pointer' />
        </div>

        <button onClick={()=>navigate('/login')} className='border px-4 rounded text-white bg-black hover:bg-gray-900 cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
