import { Route, Routes } from 'react-router-dom';
import BT5 from './BT5/bt5';
import Cart from './BT5/pages/cart';
import About from './BT5/pages/about';
import Product from './BT5/pages/product';

export default function App() {
  return (
    <Routes>
      <Route path="/bt5" element={<BT5 />} />
      <Route path="/bt5/cart" element={<Cart />} />
      <Route path="/bt5/about" element={<About/>} />
      <Route path="/bt5/product" element={<Product/>} />
      <Route/>
    </Routes>
  );
}
