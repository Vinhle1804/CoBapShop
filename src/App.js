import { Route, Routes } from "react-router-dom";
import BT5 from "./BT5/bt5";
import Cart from "./BT5/pages/cart";
import About from "./BT5/pages/about";
import Product from "./BT5/pages/product";
import Login from "./BT5/pages/login";
import Register from "./BT5/pages/register";
import Checkout from "./BT5/pages/checkout";
import Index from "./BT5/pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/bt5" element={<BT5 />} />

      <Route path="/bt5/cart" element={<Cart />} />
      <Route path="/pages/checkout" element={<Checkout />} />
      <Route />

      <Route path="/bt5/about" element={<About />} />
      <Route path="/bt5/product" element={<Product />} />
      <Route path="/bt5/login" element={<Login />} />
      <Route path="/bt5/register" element={<Register />} />
      <Route />
    </Routes>
  );
}
