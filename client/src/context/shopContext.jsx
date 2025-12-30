import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(()=>{
        if(token){
            navigate('/');
        }
    },[token])

  const value = {
    token,
    setToken,
    backendUrl,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
