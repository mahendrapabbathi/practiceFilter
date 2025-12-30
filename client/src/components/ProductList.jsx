import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import data from '../assets/assets'

const ProductList = ({search,category,price,color}) => {

    const [menu, setMenu] = useState("All Products")
    const [filteredProducts, setFilteredProducts] = useState([])

    const filterd = () =>{
        let result = data;
        if(menu !== "All Products"){
            result = result.filter((item)=>item.company.toLowerCase() === menu.toLowerCase());
        }

        if(search.trim() !== ""){
            result = result.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()) || item.newPrice.toString().includes(search))
        }

        if(category !== "All"){
            result = result.filter(item=>category.toLowerCase() === item.category.toLowerCase())
        }

        if(price !== null){
            result = result.filter((item)=>{
                const p = Number(item.newPrice);
                if(price === "150+"){
                    return p>150;
                }
                const [min,max] = price.split("-").map(Number);
                return p>=min && p<=max;
            })
        }
        
        if(color !== null){
            result = result.filter((item)=>item.color.toLowerCase() === color.toLowerCase())
        }

        setFilteredProducts(result)
    }

    useEffect(()=>{
        filterd();
    },[menu,search,category,price,color])


  return (
    <div className='px-[4%] mt-8 flex flex-col'>
      <h1 className='font-bold text-xl '>Recommended</h1>

      <div className='flex gap-2 my-4'>
        <p onClick={()=>setMenu("All Products")} className={`border border-gray-500 text-gray-800 cursor-pointer px-4 py-1 rounded-md  ${menu === "All Products" ? "bg-gray-200" : ""}`}>All Products</p>
        <p onClick={()=>setMenu("Nike")} className={`border border-gray-500 text-gray-800 cursor-pointer px-4 py-1 rounded-md  ${menu === "Nike" ? "bg-gray-200" : ""}`}>Nike</p>
        <p onClick={()=>setMenu("Adidas")} className={`border border-gray-500 text-gray-800 cursor-pointer px-4 py-1 rounded-md  ${menu === "Adidas" ? "bg-gray-200" : ""}`}>Adidas</p>
        <p onClick={()=>setMenu("Puma")} className={`border border-gray-500 text-gray-800 cursor-pointer px-4 py-1 rounded-md  ${menu === "Puma" ? "bg-gray-200" : ""}`}>Puma</p>
        <p onClick={()=>setMenu("Vans")} className={`border border-gray-500 text-gray-800 cursor-pointer px-4 py-1 rounded-md  ${menu === "Vans" ? "bg-gray-200" : ""}`}>Vans</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 space-y-4 mt-4'>
        {
            filteredProducts.map((item,index)=>{
                return <ProductItem key={index} id={item.id} image={item.img} title={item.title} star={item.star} reviews={item.reviews} prevPrice={item.prevPrice} newPrice={item.newPrice}  />
            })
        }
        
      </div>

    </div>
  )
}

export default ProductList
