import { ArrowLeft } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import AmountForm from '../components/AmountForm'

const Orders = () => {

    const {navigate,cartItems} = useContext(ShopContext)

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        state : "",
        city : "",
        street : "",
        phone : "",
        pincode : ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev)=>({...prev,[name]:value}));
    }
    console.log(formData)

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='px-4 sm:px-10 md:px-16 lg:px-24 mt-12 '>
            <div className='flex gap-4 '>
                <ArrowLeft onClick={() => navigate(-1)} className=' cursor-pointer mt-1' size={30} />
                <h1 className='text-3xl font-bold '>My Orders</h1>
            </div>
            <div className='flex flex-col gap-4 lg:flex-row justify-between'>
                <form onSubmit={onSubmitHandler} className='mt-8 '>
                    <div className='w-[440px] flex flex-col gap-4 '>
                        <div className='flex gap-2 w-full'>
                            <input type="text" 
                            name='firstName'
                            value={formData.value}
                            onChange={handleInput}
                            placeholder='First Name' className='border border-gray-400 rounded px-4 py-2'/>
                            <input type="text" 
                            name='lastName'
                            value={formData.value}
                            onChange={handleInput}
                            placeholder='Last Name' className='border border-gray-400 rounded px-4 py-2'/>
                        </div>
                        <input type="email" name='email'
                            value={formData.value}
                            onChange={handleInput} placeholder='Email Address' className='border border-gray-400 rounded px-4 py-2 w-full'/>
                        <input type="text" name='state'
                            value={formData.value}
                            onChange={handleInput} placeholder='State' className='border border-gray-400 rounded px-4 py-2 w-full'/>
                        <div className='flex gap-2 w-full'>
                            <input type="text" 
                            name='city'
                            value={formData.value}
                            onChange={handleInput}
                            placeholder='City' className='border border-gray-400 rounded px-4 py-2'/>
                            <input type="text" 
                            name='street'
                            value={formData.value}
                            onChange={handleInput}
                            placeholder='Street' className='border border-gray-400 rounded px-4 py-2'/>
                        </div>
                        <div className='flex gap-2 w-full'>
                            <input type="number" 
                            name='phone'
                            value={formData.value}
                            onChange={handleInput}
                            placeholder='Phone' className='border border-gray-400 rounded px-4 py-2'/>
                            <input type="number" 
                            name='pincode'
                            value={formData.value}
                            onChange={handleInput}
                            placeholder='Pincode' className='border border-gray-400 rounded px-4 py-2'/>
                        </div>
                    </div>
                </form>

                <div className='flex flex-col mt-8 items-start lg:items-end'>
                    <div className='flex flex-col gap-4 w-[400px]'>
                        <h1 className='text-3xl font-bold '>Total Amount</h1>
                        
                        <AmountForm />
                        <button onClick={()=>navigate('/my-orders')} className='my-6 bg-black text-white px-6 py-2 cursor-pointer hover:bg-gray-950 rounded font-medium '>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
