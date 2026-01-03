import React, { useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ShopContext } from '../context/shopContext'

const ProductItem = ({ id, image, title, description, price }) => {

    const { navigate } = useContext(ShopContext)

    return (
        <div className='flex '>
            <div className='border border-gray-300 rounded  w-[240px]'>
                <img onClick={() => navigate(`/product/${id}`)} className='w-full h-42 cursor-pointer' src={image} alt="" />
                <div className='px-4 py-2  flex flex-col '>
                    <h1 className='text-[17px] mt-2 font-bold'>{title}</h1>
                    <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-1">
                            {Array(5).fill().map((_, i) => (
                                <AiFillStar key={i} className="rating-star fill-amber-300" />
                            ))}
                        </div>

                        <p className="font-bold pr-6">${price}</p>
                    </div>

                    <p className='pl-1 text-xs mt-1 text-gray-600 font-medium line-clamp-2'>{description}</p>
                    <div className='mt-2 flex gap-2 '>
                        {/* <p className='line-through text-gray-500'>{prevPrice}</p> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductItem
