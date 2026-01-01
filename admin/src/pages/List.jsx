import axios from 'axios';
import { Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const List = ({ token }) => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`)
      // console.log(response.data)
      if (response.data.success) {
        setProducts(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(`${backendUrl}/api/product/remove`, {id},{ headers: { 'token' : token } })
      if (response.data.success) {
        toast.success(response.data.message)
        fetchProducts()
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col justify-between">
      <div className="w-full md:p-4 p-2">
        <h2 className="pb-4 text-lg font-bold text-black">All Products</h2>

        <div className="flex flex-col gap-3 bg-white border border-gray-500/20 rounded-md p-3 ">

          {/* HEADER (MD ONLY) */}
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] font-semibold text-gray-700 border-b pb-2 gap-6 ">
            <div className='flex justify-between items-center gap-20'>
              <p>Product</p>
              <p className='hidden lg:block'>Title</p>
              <p className='hidden lg:block'>Category</p>
              <p>Price</p>
              <p>Remove</p>
            </div>
          </div>

          {/* PRODUCTS */}
          {products.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-3 lg:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-10 border-b py-3"
            >
              {/* IMAGE */}
              <div className=''>
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-24 md:w-32 rounded "
                />
              </div>

              {/* TITLE (MD ONLY) */}
              <p className="hidden lg:block text-black font-medium text-lg">
                {product.title}
              </p>

              {/* CATEGORY (MD ONLY) */}
              <p className="hidden lg:block text-gray-600">
                {product.category}
              </p>

              {/* PRICE */}
              <p className="text-black font-semibold">
                ₹{product.price}
              </p>

              {/* REMOVE */}
              <button
                onClick={() => removeProduct(product._id)}
                className="text-red-500 hover:text-red-700 flex justify-start cursor-pointer"
              >
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default List
