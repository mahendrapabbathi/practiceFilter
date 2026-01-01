import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(()=>{
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : {}
  });
  const delivery_fee = 10;

  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev[product.id];
      return {
        ...prev, [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
  }

  const increaseQuantity = (product) => {
    setCartItems((prev)=>({
      ...prev,[product.id]:{
        ...prev[product.id],
        quantity:prev[product.id].quantity + 1
      }
    }))
  }

  const decreaseQuantity = (product) => {
    setCartItems((prev)=>{
      const copy = {...prev};
      if(copy[product.id].quantity > 1){
        copy[product.id] = {
          ...copy[product.id],
          quantity:copy[product.id].quantity - 1,
        }
      }
      else{
        delete copy[product.id]
      }
      return copy;
    })
  }

  const getCartCount = () => {
    let total = 0;
    for(const key in cartItems){
      total += cartItems[key].quantity;
    }
    return total;
  }

  const removeFromCart = (product) => {
    setCartItems((prev)=>{
      const copy = {...prev};
      if(!copy[product.id]) return copy;
      if(copy[product.id].quantity > 1){
        copy[product.id] = {
          ...copy[product.id],
          quantity : copy[product.id].quantity-1
        }
      }
      else delete copy[product.id];
      return copy;
    })
  }

  const getCartTotalAmount = () => {
    let total = 0;
    for(const key in cartItems){
      total += cartItems[key].quantity * cartItems[key].product.newPrice;
    }
    return total;
  }

  useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  })

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems])

  const value = {
    token,
    setToken,
    backendUrl,
    navigate,
    addToCart,
    cartItems,
    setCartItems,
    getCartCount,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    delivery_fee,
    getCartTotalAmount
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
