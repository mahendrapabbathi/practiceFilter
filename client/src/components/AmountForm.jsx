import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const AmountForm = () => {

    const {delivery_fee, getCartTotalAmount} = useContext(ShopContext)

    return (
        <>
            <div className='flex justify-between border-b pb-1'>
                <p>Cart Amount</p>
                <p className='font-bold'>${getCartTotalAmount()}</p>
            </div>
            <div className='flex justify-between border-b pb-1'>
                <p>Delivery Fee</p>
                <p className='font-bold'>${delivery_fee}</p>
            </div>
            <div className='flex justify-between pb-1'>
                <p>Total Amount</p>
                <p className='font-bold'>${getCartTotalAmount() + delivery_fee}</p>
            </div>
        </>
    )
}

export default AmountForm
