import React, { useState, useEffect } from "react";
import Product from "./pages/product";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/slice/cartSlice";
const staticProductList = [
  {
    "id": "1",
    "name": "Iced Skinny Flavored Latte",
    "imgURL": "https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "136.000 VND"
  },
  {
    "id": "2",
    "name": "Hazelnut Macchiato",
    "imgURL": "https://images.unsplash.com/photo-1689358931339-cf2ccd39e7b1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "139.000 VND"
  },
  {
    "id": "3",
    "name": "Asian Dolce Latte",
    "imgURL": "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "149.000 VND"
  },
  {
    "id": "4",
    "name": "Café Bombón",
    "imgURL": "https://images.unsplash.com/photo-1574282341921-cdeeab8e1ab1?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "109.000 VND"
  },
  {
    "id": "5",
    "name": "Café Cubano",
    "imgURL": "https://images.unsplash.com/photo-1609269139795-8378b1090a78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "119.000 VND"
  },
  {
    "id": "6",
    "name": "Café au Lait",
    "imgURL": "https://images.unsplash.com/photo-1647919231480-341269728e9f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "129.000 VND"
  },
  {
    "id": "7",
    "name": "Affogato",
    "imgURL": "https://images.unsplash.com/photo-1647919236988-b62126eb0c65?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "149.000 VND"
  },
  {
    "id": "8",
    "name": "Flat White",
    "imgURL": "https://images.unsplash.com/photo-1527156231393-7023794f363c?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "120.000 VND"
  }
];

function ProductList() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setList(staticProductList);
  }, []);

  const addCart = (item) => {
    console.log("Adding to cart:", item);
    dispatch(addtoCart(item));
  };

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Hello everyone, welcome to Maxion Coffee.
        </h1>
        <h1 className="text-3xl">Have a good day!</h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {list.map((sp) => (
          <div
            key={sp.id} 
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Product item={sp} addCart={() => addCart(sp)} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;