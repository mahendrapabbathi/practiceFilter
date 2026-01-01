import React from 'react'
import {List, PlusCircle, ShoppingBag} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[89vh] border-r-1 fixed top-[66px] bottom-0'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink to='/add' className='flex gap-2 items-center border-l border-t border-b px-3 py-2'>
            <PlusCircle />
            <p className='hidden lg:flex'>Add Product</p>
        </NavLink>
        <NavLink to='/list' className='flex gap-2 items-center border-l border-t border-b px-3 py-2'>
            <List />
            <p className='hidden lg:flex '>List Products</p>
        </NavLink>
        <NavLink to='/orders' className='flex gap-2 items-center border-l border-t border-b px-3 py-2'>
            <ShoppingBag />
            <p className='hidden lg:flex '>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
