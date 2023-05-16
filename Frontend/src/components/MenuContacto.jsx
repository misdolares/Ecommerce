import React from "react";
import { useState } from "react";
import {
  RiMenu3Fill,
  RiAddLine,
  RiCloseLine,
  RiAdminLine,
 } from "react-icons/ri";

import Sidebar from "../components/shared/Sidebar";
import { Car } from "../components/shared/Car";
import { HeaderContacto } from "../components/shared/HeaderContacto";
import { ContactForm } from "../components/shared/ContactForm";

export const MenuContacto = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showSelectContacto] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} showSelectContacto={showSelectContacto} />
      <Car
        showOrder={showOrder}
        setShowOrder={setShowOrder}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      {/* Menu Celular */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiAdminLine />
        </button>

        <button onClick={toggleOrders} className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          <HeaderContacto />

          <div className="p-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-16">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuContacto;

