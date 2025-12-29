// import { ShoppingCart } from 'lucide-react'
// import React from 'react'

// const Sidebar = ({category, setCategory}) => {

//     const handleFilter = (e) =>{
//         const value = e.target.value;
//         if(value === "All"){
//             setCategory([])
//             return;
//         }
//         if(category.includes(value)){
//             setCategory(category.filter(item=>item !== value))
//         }
//         else{
//             setCategory([...category,value])
//         }
//     }

//     return (
//         <div className='flex flex-col w-[15%] border-r h-[100vh] fixed top-0 bottom-0 overflow-y-auto'>
//             <div className=' flex justify-center py-5 border-b'>
//                 <ShoppingCart />
//             </div>

//             <div className='pl-8 pt-6'>
//                 <div className='my-2'>
//                     <p className='font-semibold text-xl mb-2'>Category</p>
//                     <div >
//                         <label htmlFor="" className='flex gap-2'>
//                             <input onChange={handleFilter} value='All' type="checkbox" 
//                             checked={category.length === 0}/>All
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input onChange={handleFilter} 
//                             value='Sneakers' 
//                             type="checkbox" 
//                             checked={category.includes("Sneakers")}/>Sneakers
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input onChange={handleFilter} value='Flats' type="checkbox" 
//                             checked={category.includes("Flats")} />Flats
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input onChange={handleFilter} value='Sandals' type="checkbox" 
//                             checked={category.includes("Sandals")}/>Sandals
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input onChange={handleFilter} value='Heels' type="checkbox" 
//                             checked={category.includes("Heels")} />Heels
//                         </label>
//                     </div>
//                 </div>

//                 <div className='my-2'>
//                     <p className='font-semibold text-xl mb-2'>Price</p>
//                     <div >
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />All
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />$0-50
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />$50-100
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />$100-150
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />Over $150
//                         </label>
//                     </div>
//                 </div>

//                 <div className='my-2'>
//                     <p className='font-semibold text-xl mb-2'>Colors</p>
//                     <div >
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />All
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />Black
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />Blue
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />Red
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />Green
//                         </label>
//                     </div>
//                     <div>
//                         <label htmlFor="" className='flex gap-2'>
//                             <input type="checkbox" />White
//                         </label>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Sidebar




// for radio 


import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Sidebar = ({ category, setCategory, price, setPrice, color, setColor }) => {

    return (
        <div className='flex flex-col w-[15%] border-r h-[100vh] fixed top-0 bottom-0 overflow-y-auto hide-scrollbar'>
            <div className=' flex justify-center py-5 border-b'>
                <ShoppingCart />
            </div>

            <div className='pl-8 pt-6'>
                <div className='my-2'>
                    <p className='font-semibold text-xl mb-2'>Category</p>
                    <div >
                        <label className="flex gap-2">
                            <input
                                type="radio"
                                name="category"
                                value="All"
                                checked={category === "All"}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            All
                        </label>
                    </div>
                    <div>
                        <label className="flex gap-2">
                            <input
                                type="radio"
                                name="category"
                                value="Sneakers"
                                checked={category === "Sneakers"}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            Sneakers
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input
                                type="radio"
                                name="category"
                                value="Flats"
                                checked={category === "Flats"}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            Flats
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input
                                type="radio"
                                name="category"
                                value="Sandals"
                                checked={category === "Sandals"}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            Sandals
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input
                                type="radio"
                                name="category"
                                value="Heels"
                                checked={category === "Heels"}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            Heels
                        </label>
                    </div>
                </div>

                <div className='my-2'>
                    <p className='font-semibold text-xl mb-2'>Price</p>
                    <div >
                        <label htmlFor="" className='flex gap-2'>
                            <input name="price" value="" checked={price === null} onChange={(e)=>setPrice(null)} type="radio" />All
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name="price" value="0-50" checked={price === "0-50"} onChange={(e)=>setPrice(e.target.value)} />$0-50
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name="price" value="50-100" checked={price === "50-100"} onChange={(e)=>setPrice(e.target.value)} />$50-100
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name="price" value="100-150" checked={price === "100-150"} onChange={(e)=>setPrice(e.target.value)} />$100-150
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name="price" value="150+" checked={price === "150+"} onChange={(e)=>setPrice(e.target.value)} />Over $150
                        </label>
                    </div>
                </div>

                <div className='my-2'>
                    <p className='font-semibold text-xl mb-2'>Colors</p>
                    <div >
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name="color" value="null" checked={color === null} onChange={()=>setColor(null)} />All
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name='color' value='Black' checked={color === "Black"} onChange={(e)=>setColor(e.target.value)} />Black
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name='color' value='Blue' checked={color === "Blue"} onChange={(e)=>setColor(e.target.value)}/>Blue
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name='color' value='Red' checked={color === "Red"} onChange={(e)=>setColor(e.target.value)}/>Red
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name='color' value='Green' checked={color === "Green"} onChange={(e)=>setColor(e.target.value)}/>Green
                        </label>
                    </div>
                    <div>
                        <label htmlFor="" className='flex gap-2'>
                            <input type="radio" name='color' value='White' checked={color === "White"} onChange={(e)=>setColor(e.target.value)}/>White
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
