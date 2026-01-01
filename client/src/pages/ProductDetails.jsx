import React, { useContext, useEffect, useState } from 'react'
import data from '../assets/assets';
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai';
import ProductItem from '../components/ProductItem';
import { ArrowLeft } from 'lucide-react';
import { ShopContext } from '../context/shopContext';

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const {navigate, addToCart} = useContext(ShopContext)

  const FilterProductById = () => {
    const foundProduct = data.find((item)=>item.id === Number(id))
    setProduct(foundProduct)
  }

  const fetchRelatedProducts = () => {
    if(!product) return;
    const dataCopy = data.filter((item)=>item.category === product.category && item.id !== product.id)
    setRelatedProducts(dataCopy.slice(0,5));
  }

  useEffect(() => {
    FilterProductById()
  }, [id])

  useEffect(()=>{
    fetchRelatedProducts()
  },[product])

  if (!product) {
    return <h1 className="text-center mt-20">Loading product...</h1>
  }

  return (
    <div className='px-4 sm:px-10 md:px-16 lg:px-24 mt-12'>
      <div className='flex gap-4 '>
        <ArrowLeft onClick={()=>navigate(-1)} className=' cursor-pointer mt-1' size={30}  />
        <h1 className='text-3xl font-bold '>Product Data</h1>
      </div>
      <div className='flex flex-col sm:flex-row mt-12 gap-12 justify-between w-[820px]'>
        <div>
          <img src={product.img} className='w-120 h-100 px-6 py-16 shadow-sm shadow-black' alt="" />
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold'>{product.title}</h1>
          <div className='flex items-center mt-2'>
            {Array(product.star).fill().map((_, i) => (
              <AiFillStar key={i} className="rating-star fill-amber-300" />
            ))}
            <p className='pl-1 text-xs'>{product.reviews}</p>
          </div>
          <div className='flex gap-2'>
            <p className='line-through text-gray-500'>{product.prevPrice}</p>
            <p className='font-semibold'>${product.newPrice}</p>
          </div>
          <h1 className='text-xl font-medium text-gray-600'>Company : <span className='text-black'>{product.company}</span></h1>
          <h1 className='text-xl font-medium text-gray-600'>Color : <span className='text-black'>{product.color}</span></h1>
          <h1 className='text-xl font-medium text-gray-600'>Category : <span className='text-black'>{product.category}</span></h1>
        <button onClick={()=>addToCart(product)} className='bg-black text-white cursor-pointer px-6 py-2 rounded mt-2 hover:bg-gray-800'>Add To Cart</button>
        </div>
      </div>

      <h1 className='mt-14 text-2xl font-semibold'>Related Products</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 space-y-4 mt-6 mb-12'>
        {
          relatedProducts.map((item,index)=>{
            return <ProductItem key={index} id={item.id} image={item.img} title={item.title} prevPrice={item.prevPrice} newPrice={item.newPrice} reviews={item.reviews} star={item.star} />
          })
        }
      </div>
    </div>
  )
}

export default ProductDetails
