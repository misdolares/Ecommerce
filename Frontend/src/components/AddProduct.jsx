import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("quantity", "1");

    try {
      await axios.post("http://localhost:5000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  const DBSuppliers2 = [
    { id: "Cola Less", name: "Cola Less" },
    { id: "Bombacha", name: "Bombacha" },
    { id: "Conjunto", name: "Conjunto" },
  ];

  const handleSelectChange = (event) => {
    console.log(event.value);
    setCategory(event.value);
  };

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      {preview ? (
        <figure className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full">
          <img src={preview} alt="Imagen de vista previa" />
        </figure>
      ) : (
        <img
          src=""
          className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        />
      )}

      <form onSubmit={saveProduct}>
        <div className="field py-2">
          <label className="text-gray-600 py-2">Nombre del Producto</label>
          <div className="text-gray-600 py-2">
            <input
              type="text"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg text-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nombre del Producto"
            />
          </div>
        </div>

        <div className="field py-2">
          <label className="text-gray-600 py-2">Categoria</label>
          <div className="text-gray-600 py-2">
            <Select
              options={DBSuppliers2.map((sup) => ({
                label: sup.name,
                value: sup.id,
              }))}
              onChange={handleSelectChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="text-gray-600 py-2">Precio</label>
          <div className="text-gray-600 py-2">
            <input
              type="text"
              className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg text-gray-400"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Precio"
            />
          </div>
        </div>

        <div className="field">
          <label className="text-gray-600 py-2">Imagen</label>
          <div className="text-gray-600 py-2">
            <div className="file">
              <label className="file-label">
                <input
                  type="file"
                  className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg text-gray-400"
                  onChange={loadImage}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-success">
              Agregar producto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
