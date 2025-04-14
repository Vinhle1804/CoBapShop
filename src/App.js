import { Route, Routes } from "react-router-dom";
import Index from "./tdtk/pages";
import Cart from "./tdtk/pages/cart";
import Checkout from "./tdtk//pages/checkout";
import About from "./tdtk/pages/about";
import Product from "./tdtk/pages/product";
import Login from "./tdtk/pages/login";
import Register from "./tdtk/pages/register";
import Order from "./tdtk//pages/orders";
import Unauthorized from "./tdtk/pages/nnauthorized";
import RoleBasedRoute from "./tdtk/component/roleBasedRoute";





export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/tdtk/" element={<Index />} />

      <Route path="/tdtk/cart" element={<RoleBasedRoute allowedRoles={[0,1]}>
      <Cart />
    </RoleBasedRoute>} />
      <Route path="/pages/checkout" element={<RoleBasedRoute allowedRoles={[0,1]}>
      <Checkout />
    </RoleBasedRoute>} />
      <Route />
      
      <Route path="/tdtk/about" element={<About/>} />
      <Route path="/tdtk/product" element={  <RoleBasedRoute allowedRoles={[0,1]}>
      <Product />
    </RoleBasedRoute>} />
      <Route path="/tdtk/login" element={<Login/>} />
      <Route path="/tdtk/register" element={<Register/>} />
      <Route />
      <Route path="/tdtk/unauthorized" element={<Unauthorized />} />
      <Route path="/tdtk/order" element={<Order/>} />

      <Route
        path="/tdtk/siuu"
        element={
          <RoleBasedRoute allowedRoles={[1]}>
            <Order />
          </RoleBasedRoute>
        }
      />

    </Routes>
  );
}
