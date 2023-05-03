import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import MenuLogin from "./components/MenuLogin";
import MenuRegistro from "./components/MenuRegistro";
import MenuForget from "./components/MenuForget";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import {Home} from "./components/Home.jsx";

// Login Pages

import ChangePassword from "./pages/auth/ChangePassword";
import Error404 from "./pages/404";

export const App = () => {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<ProductList />} />
        <Route path="admin/add" element={<AddProduct />} />
        <Route path="admin/edit/:id" element={<EditProduct />} />

        <Route path="login" element={<MenuLogin />}/>
        <Route path="registro" element={<MenuRegistro />} />
        <Route path="olvide-password" element={<MenuForget />} />
        <Route path="restablecer-password/:token" element={<ChangePassword />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>





  );
}

export default App;