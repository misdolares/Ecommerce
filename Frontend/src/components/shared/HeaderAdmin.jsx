import React from "react";
import { RiSearch2Line } from "react-icons/ri";

export const HeaderAdmin = () => {
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Tangas SA</h1>
          <p className="text-gray-500">Trabajo Practico Ecommerce</p>
        </div>

        <form>
          <div className="w-full relative">
            <div></div>
          </div>
        </form>
      </div>

      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <p className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">
          Admin
        </p>
      </nav>
    </header>
  );
};

export default HeaderAdmin;
