import React, { useState } from 'react'
import upload_area from '../assets/upload_area.png'
import { toast } from 'react-toastify';
import axios from 'axios';
import { backendUrl } from '../App';

const Add = ({ token }) => {

  const [img, setImg] = useState(null)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Sneakers')
  const [color, setColor] = useState('Black')

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!img) {
      toast.error("Product image is required")
      return
    }
    
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("color", color);

      formData.append("img", img)

      const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } })
      console.log(response.data)

      if (response.data.success) {
        toast.success(response.data.message)
        setTitle('')
        setDescription('')
        setImg(null)
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="py-1 flex flex-col justify-between bg-white">
      <h1 className='text-black font-bold text-2xl'>Add Product</h1>
      <form onSubmit={onSubmitHandler} className="md:p-6 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium ">Product Image</p>
          <div className="flex  mt-2 ">
            <label htmlFor="img">
              <img className='w-28 cursor-pointer' src={!img ? upload_area : URL.createObjectURL(img)} alt="" />
              <input onChange={(e) => setImg(e.target.files[0])} type="file" id='img' hidden />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label htmlFor="title" className="text-base font-medium" >Product Name</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
          <textarea id="product-description" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
            <option value="">Select Category</option>
            {[{ name: 'Sneakers' }, { name: 'Flats' }, { name: 'Sandals' }, { name: 'Heels' }].map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
            <input id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="color">Color</label>
          <select id="color" value={color} onChange={(e) => setColor(e.target.value)} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
            <option value="">Select Color</option>
            {[{ name: 'Black' }, { name: 'Blue' }, { name: 'Red' }, { name: 'Green' }, { name: 'White' }].map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <button className="px-8 py-2.5 bg-black cursor-pointer hover:bg-gray-900 text-white font-medium rounded">ADD</button>
      </form>
    </div>
  );
};

export default Add
