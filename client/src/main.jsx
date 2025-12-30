import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShopContextProvider from './context/shopContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <ToastContainer theme='dark' />
        <App />
      </ShopContextProvider>
  </BrowserRouter>
)
