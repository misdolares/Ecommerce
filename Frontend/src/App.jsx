import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MenuAdmin from "./components/MenuAdmin";
import MenuLogin from "./components/MenuLogin";
import MenuRegistro from "./components/MenuRegistro";
import MenuForget from "./components/MenuForget";
import MenuAdminAddProduct from "./components/MenuAdminAddProduct";
import MenuAdminEditProduct from "./components/MenuAdminEditProduct";
import {Home} from "./components/Home.jsx";
import {MenuContacto} from "./components/MenuContacto.jsx";

// Login Pages

import ChangePassword from "./pages/auth/ChangePassword";
import Error404 from "./pages/404";

export const App = () => {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<MenuAdmin />} />
        <Route path="admin/add" element={<MenuAdminAddProduct />} />
        <Route path="admin/edit/:id" element={<MenuAdminEditProduct />} />

        <Route path="login" element={<MenuLogin />}/>
        <Route path="contacto" element={<MenuContacto />}/>
        <Route path="registro" element={<MenuRegistro />} />
        <Route path="olvide-password" element={<MenuForget />} />
        <Route path="restablecer-password/:token" element={<ChangePassword />} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </BrowserRouter>





  );
}

export default App;