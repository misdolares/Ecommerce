import React, { useState, useEffect } from "react";
import axios from "axios";

export const Card = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
} = props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <>
      {products.map((product) => (
        <div
          className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300"
          key={product.id}
        >
          <img
            src={product.url}
            className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
          />
          <p className="text-xl">{product.name}</p>
          <span className="text-gray-400">${product.price}</span>
          <p className="text-green-600">En stock!</p>
          <br />
          <button
            className="relative rounded-xl py-2 px-6 text-center text-amber-600 border border-amber-600 overflow-hidden transition-all ease-in-out before:absolute before:bg-[#ec7c6a] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-300 before:w-full before:h-0 hover:before:h-full hover:text-white"
            onClick={() => onAddProduct(product)}
          >
            Añadir al carrito
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
