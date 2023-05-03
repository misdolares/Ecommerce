import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { ForgetPassword } from "../pages/auth/ForgetPassword";

export const ForgetCard = ({ showOrder, setShowOrder } = props) => {
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

        <div className="flex items-center gap-4 flex-wrap my- mb-14"></div>

        <div>
          <div className="p-4 rounded-xl mb-4 col-span-4 flex items-center gap-12">
            <ForgetPassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetCard;
