import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProductAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
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
          <footer className="card-footer">
            <Link to={`edit/${product.id}`} className="card-footer-item">
              Editar
            </Link>
            <a
              onClick={() => deleteProduct(product.id)}
              className="card-footer-item"
            >
              Borrar
            </a>
          </footer>
        </div>
      ))}
      <Link to="/admin/add" className="button is-success">
        + Agregar Productos
      </Link>
    </>
  );
};
