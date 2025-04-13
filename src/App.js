import { Route, Routes } from "react-router-dom";
import BT5 from "./tdtk//bt5";
import Index from "./tdtk//pages";
import Cart from "./tdtk//pages/cart";
import Checkout from "./tdtk//pages/checkout";
import About from "./tdtk//pages/about";
import Product from "./tdtk//pages/product";
import Login from "./tdtk//pages/login";
import Register from "./tdtk//pages/register";
import Order from "./tdtk//pages/orders";





export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/tdtk/" element={<BT5 />} />

      <Route path="/tdtk/cart" element={<Cart />} />
      <Route path="/pages/checkout" element={<Checkout/>} />
      <Route />
      
      <Route path="/tdtk/about" element={<About/>} />
      <Route path="/tdtk/product" element={<Product/>} />
      <Route path="/tdtk/login" element={<Login/>} />
      <Route path="/tdtk/register" element={<Register/>} />
      <Route />
      <Route path="/tdtk/order" element={<Order/>} />

    </Routes>
  );
}
