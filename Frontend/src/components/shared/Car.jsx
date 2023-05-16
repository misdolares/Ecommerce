import React from "react";
import {
  RiCloseLine,
  RiDeleteBin6Line,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Car = ({
  showOrder,
  setShowOrder,
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
} = props) => {
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />

        <div className="flex items-center gap-4 flex-wrap mb-8">
          <span className="text-[#ec7c6a] py-2 px-0 ">
            <RiShoppingCart2Line className="text-2xl" />
          </span>
          <span className="bg-[#ec7c6a] text-white py-2 px-4 rounded-full">
            {countProducts}
          </span>
          <h1 className="text-2xl my-1 p-4 rounded-xl mb-4 col-span-4 flex items-center gap-2">
          Shopping Cart
          </h1>
        </div>

        <div className="flex items-center gap-4 flex-wrap mb-8">
          <Link
            to="/login"
            className="text-[#ec7c6a] hover:bg-[#ec7c6a] hover:text-white transition-colors py-2 px-4 rounded-xl border border-gray-500"
          >
            Login
          </Link>

          <Link
            to="/registro"
            className="text-[#ec7c6a] hover:bg-[#ec7c6a] hover:text-white transition-colors py-2 px-4 rounded-xl border border-gray-500"
          >
            Registrarse
          </Link>
          <Link
            to="/contacto"
            className="text-[#ec7c6a] hover:bg-[#ec7c6a] hover:text-white transition-colors py-2 px-4 rounded-xl border border-gray-500"
          >
            Contacto
          </Link>
        </div>

        <div>
          {allProducts.length ? (
            <div className="">
     
              <div className="h-[432px] md:h-[720px] lg:h-[510px] overflow-scroll">
                {allProducts.map((product) => (
                  <div className="" key={product.id}>
                    <div className="bg-[#b91443] p-4 rounded-xl mb-4 ">
                      <div className="grid grid-cols-6 mb-4">
                        {/* Product description */}
                        <div className="col-span-4 flex items-center gap-3">
                          <img
                            src={product.url}
                            className="w-10 h-10 object-cover"
                          />
                          <div>
                            <h5 className="text-sm">{product.name}</h5>
                        
                           
                          </div>
                        </div>
                        {/* Cantidad */}
                        <div>
                          <span className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none">
                            {product.quantity}
                          </span>
                        </div>
                        {/* Precio */}
                        <div>
                          <span>{product.price}</span>
                        </div>
                      </div>

                      {/* Observaciones */}
                      <div className="grid grid-cols-6 items-center">
                        <form className="col-span-5">
                          <input
                            type="text"
                            className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                            placeholder="Observaciones"
                          />
                        </form>

                        <div>
                          <button className="border border-red-500 p-2 rounded-lg">
                            <RiDeleteBin6Line
                              onClick={() => onDeleteProduct(product)}
                              className="text-red-500"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
                      <div className="flex items-center justify-between mb-4 grid-cols-6">
                        <span className="text-gray-400">Total</span>
                        <span>$ {total}</span>
                      </div>
                      <div>
                        <button
                          onClick={onCleanCart}
                          className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg"
                        >
                          Vaciar Carrito
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-md py-4 px-6 shadow-2xl shadow-green-800 lg bg-green-600">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <h3 className="text-xl text-white font-semibold">
                      El carrito está vacío
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Car;
