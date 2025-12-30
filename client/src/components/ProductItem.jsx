import React, { useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ShopContext } from '../context/shopContext'

const ProductItem = ({id, image, title, star, reviews, prevPrice, newPrice }) => {

    const {navigate} = useContext(ShopContext)

    return (
        <div className='flex cursor-pointer'>
            <div className='border border-gray-300 rounded px-4 py-8 w-[240px]'>
                <img onClick={()=>navigate(`/product/${id}`)} className='w-44 h-24' src={image} alt="" />
                <div>
                    <h1 className='text-[17px] mt-2 font-bold'>{title}</h1>
                    <div className='flex items-center mt-2'>
                        {Array(star).fill().map((_, i) => (
                            <AiFillStar key={i} className="rating-star fill-amber-300" />
                        ))}
                        <p className='pl-1 text-xs'>{reviews}</p>
                    </div>
                    <div className='mt-2 flex gap-2'>
                        <p className='line-through text-gray-500'>{prevPrice}</p>
                        <p className='font-semibold'>${newPrice}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductItem
