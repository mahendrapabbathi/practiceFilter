import React, { useState } from 'react'

const Login = () => {

    const [currState, setCurrState] = useState("Sign Up")
    const [data, setData] = useState({
        username : "",
        email : "",
        password : ""
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    }
    console.log(data)

    const onHandleSubmit = async (e) =>{
        e.preventDefault();
    }

  return (
    <form onSubmit={onHandleSubmit} className='flex items-center justify-center h-screen'>
        <div className='flex flex-col border gap-4 rounded-md border-gray-700 px-12 py-8 w-[450px]'>
            <h1 className='text-center font-bold text-3xl mb-4'>{currState}</h1>
            {currState === "Sign Up" ?<div className='flex'>
                <p className='w-30'>Username: </p>
                <input className='outline-none border border-gray-300 w-full px-2 py-1.5 rounded-md' type="text" placeholder='Name' name='username' value={data.username} onChange={handleInput}/>
            </div> : null }
            
            <div className='flex'>
                <p className='w-30'>Email: </p>
                <input type="email" className='outline-none border border-gray-300 w-full px-2 py-1.5 rounded-md' placeholder='E-mail' name='email' value={data.email} onChange={handleInput}/>
            </div>
            <div className='flex'>
                <p className='w-30'>Password: </p>
                <input type="password" className='outline-none border border-gray-300 w-full px-2 py-1.5 rounded-md' placeholder='Password' name='password' value={data.password} onChange={handleInput}/>
            </div>
            <button className='bg-black cursor-pointer py-2 w-40 mx-auto mt-2 rounded-lg text-white'>{currState === "Sign Up" ? "Sign Up" : "Login"}</button>
            <div>
                {
                    currState === "Sign Up" ? 
                    <div className='flex justify-between'>    
                        <p>Already have account? </p> 
                        <p onClick={()=>setCurrState("Login")} className='cursor-pointer font-semibold underline'>Login</p>
                    </div> :
                    <div className='flex justify-between'>
                        <p>Don't have account?</p>
                        <p onClick={()=>setCurrState("Sign Up")} className='cursor-pointer font-semibold underline'>Sign Up</p>
                    </div>
                }
                
                
            </div>
        </div>
    </form>
  )
}

export default Login
