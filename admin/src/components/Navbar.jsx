import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = ({setToken}) => {

  const navigate = useNavigate()

  const logout = async () => {
    try {
      navigate('/admin')
      setToken("");
      localStorage.removeItem('token');
      toast.success("Logout Successfully")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className='fixed w-full z-50 bg-white'>
      <div className='hidden sm:flex justify-between py-4 border-b px-24 '>
        <h1 className='text-2xl font-bold cursor-pointer'>Shoeshy</h1>
        <button onClick={logout} className='border px-4 py-1 rounded text-white bg-black hover:bg-gray-900 cursor-pointer'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
