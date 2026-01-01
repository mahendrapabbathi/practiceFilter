import React, {  useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { backendUrl } from '../App'

const Login = ({setToken}) => {

    

    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    }
    // console.log(data)

    const onHandleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`${backendUrl}/api/user/admin`,data)
            console.log(response.data)
            if(response.data.success){
                const token = response.data.token
                setToken(token);
                localStorage.setItem('token',token);
                toast.success("Login Successful");
            }
            else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

  return (
    <form onSubmit={onHandleSubmit} className='flex items-center justify-center h-screen'>
        <div className='flex flex-col border gap-4 rounded-md border-gray-700 px-12 py-8 w-[450px]'>
            <h1 className='text-center font-bold text-3xl mb-4'>Login</h1>
            
            <div className='flex'>
                <p className='w-30'>Email: </p>
                <input type="email" className='outline-none border border-gray-300 w-full px-2 py-1.5 rounded-md' placeholder='E-mail' name='email' value={data.email} onChange={handleInput}/>
            </div>
            <div className='flex'>
                <p className='w-30'>Password: </p>
                <input type="password" className='outline-none border border-gray-300 w-full px-2 py-1.5 rounded-md' placeholder='Password' name='password' value={data.password} onChange={handleInput}/>
            </div>
            <button className='bg-black cursor-pointer py-2 w-40 mx-auto mt-2 rounded-lg text-white'>Login</button>
            
        </div>
    </form>
  )
}

export default Login
