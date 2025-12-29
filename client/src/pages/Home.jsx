import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

const Home = () => {

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [price, setPrice] = useState(null) 
  const [color, setColor] = useState(null)

  return (
    <div className='flex'>
      <Sidebar category={category} setCategory={setCategory} price={price} setPrice={setPrice} color={color} setColor={setColor}/>
      <div className='ml-[15%] w-[85%] '>
        <Navbar search={search} setSearch={setSearch}/>
        <ProductList search={search} category={category} price={price} color={color}/>
      </div>
    </div>
  )
}

export default Home
