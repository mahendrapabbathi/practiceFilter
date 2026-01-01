import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { ArrowLeft, Trash2 } from 'lucide-react';
import AmountForm from '../components/AmountForm';

const Cart = () => {

    const { cartItems, navigate, removeFromCart, increaseQuantity, decreaseQuantity, delivery_fee, getCartTotalAmount } = useContext(ShopContext)
    console.log(cartItems);

    const cartData = [];
    for (const id in cartItems) {
        const item = cartItems[id];
        cartData.push(item);
    }

    return (
        <div className='px-4 sm:px-10 md:px-16 lg:px-24 mt-12'>
            <div className='flex gap-4 '>
                <ArrowLeft onClick={() => navigate(-1)} className=' cursor-pointer mt-1' size={30} />
                <h1 className='text-3xl font-bold '>Product Data</h1>
            </div>
            {
                cartData.map((item, index) => {
                    return (
                        <div key={index} className='border-t my-6 py-2 flex items-center justify-between px-4'>
                            <img className='w-30 h-20' src={item.product.img} alt="" />
                            <div className='flex flex-col gap-3'>
                                <h1 className='hidden sm:block font-semibold text-xl w-70'>{item.product.title}</h1>
                                <div className='hidden sm:flex gap-3'>
                                    <p className=''>Price : <span className='font-semibold'>${item.product.newPrice}</span></p>
                                    <p>Brand : <span className='font-semibold'>{item.product.company}</span></p>
                                </div>
                            </div>
                            <div className='flex  gap-4 px-4 items-center '>
                                <button onClick={() => decreaseQuantity(item.product)} className='cursor-pointer text-2xl border px-4 bg-gray-100 pb-1'>-</button>
                                <p className='text-xl'>{item.quantity}</p>
                                <button onClick={() => increaseQuantity(item.product)} className='cursor-pointer text-2xl border px-4 bg-gray-100 pb-1'>+</button>
                            </div>
                            <Trash2 className='cursor-pointer' onClick={() => removeFromCart(item.product)} />

                        </div>
                    )
                })
            }
            <hr />

            <div className='flex flex-col my-12 lg:items-end'>
                <div className='flex flex-col gap-4 w-[400px]'>
                    <h1 className='text-3xl font-bold '>Product Data</h1>
                    <AmountForm />
                    <button onClick={()=>navigate('/my-orders')} className='my-6 bg-black text-white px-6 py-2 cursor-pointer hover:bg-gray-950 rounded font-medium '>Proceed To Orders</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
