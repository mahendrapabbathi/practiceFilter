import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../assets/assets";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (id) => {
    setCartItems((prev)=>({
      ...prev,[id]:(prev[id] || 0) + 1,
    }));
  }

  const getCartCount = () => {
    let total = 0;
    for(const key in cartItems){
      total += cartItems[key];
    }
    return total;
  }

  const removeFromCart = (id) => {
    setCartItems((prev)=>{
      const copy = {...prev};
      if(copy[id] > 1) copy[id] -= 1;
      else delete copy[id];
      return copy;
    })
  }

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  const value = {
    token,
    setToken,
    backendUrl,
    navigate,
    addToCart,
    cartItems,
    getCartCount,
    removeFromCart
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
