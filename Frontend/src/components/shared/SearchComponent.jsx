import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiSearch2Line, RiArrowDownSLine } from "react-icons/ri";
import Select from "react-select";

export const SearchComponent = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
} = props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [select, setSelect] = useState("");

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const allCategories = [
    "Productos",
    "Cola Less",
    "Bombacha",
    "Conjunto",
    ...new Set(products.map((article) => article.category)),
  ];

  const [categories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "Productos") {
      setSearch("");
      return;
    }

    if (category === "Cola Less") {
      setSearch("Cola Less");
      return;
    }

    if (category === "Bombacha") {
      setSearch("Bombacha");
      return;
    }

    if (category === "Conjunto") {
      setSearch("Conjunto");
      return;
    }
  };

  const results = !search
    ? products.sort((a, b) => b.id - a.id)
    : products.filter((dato) =>
        dato.category.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    getProducts();
  }, []);

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

  const handleSelectChange = (event) => {
    console.log(event.value);
    setSearch("");
  };

  return (
    <>
      <header>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl text-gray-300">Tangas SA</h1>
            <p className="text-gray-500">Trabajo Practico Ecommerce</p>
          </div>
          {/* Buscar*/}
          <form>
            <div className="w-full relative">
              <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />

              <input
                value={search}
                onChange={searcher}
                type="text"
                placeholder="Buscar"
                className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              />
            </div>
          </form>
        </div>
        {/* Tabs */}
        <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
          {/* Mapeo*/}

          {categories.map((category) => (
            <button
              className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              onClick={() => filterCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </nav>
      </header>

      <div className="flex items-center justify-between mb-16">
        <h2 className="text-xl text-gray-300"></h2>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
        {/* Mapeo*/}
        {results.map((product, index) => (
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
            <p className="text-gray-400">Categoria: {product.category}</p>
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
      </div>
    </>
  );
};
export default SearchComponent;
