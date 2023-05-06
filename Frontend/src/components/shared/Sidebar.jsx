import {
  RiHome6Line,
  RiMailLine,
  RiAdminLine,
  RiSettings4Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu, showSelectHome, showSelectAdmin, showSelectLogin } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <ul className="pl-3 py-16">
          <li className="p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors">
            <img
              src="logo.svg"
              className="bg-[#1e1c2a] w-30 h-30 p-3 object-cover -mt-20 shadow-2xl rounded-full"
              alt="Tangas SA"
            />
          </li>
          <li 
          className={`
          ${
            showSelectHome
              ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
              : "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
          }`}>
            <a
              href="/"
              className={`group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors 
              ${
                showSelectHome
                  ? "bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ffffff] group:text-white transition-colors"
                  : "group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
              }`}
            >
              <RiHome6Line className="text-2xl" />
            </a>
          </li>

          <li
            className={`
              ${
                showSelectAdmin
                  ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
                  : "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
              }`}
          >
            <a
              href="/admin"
              className={`group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors 
              ${
                showSelectAdmin
                  ? "bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ffffff] group:text-white transition-colors"
                  : "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
              }`}
            >
              <RiSettings4Line className="text-2xl" />
            </a>
          </li>
          <li className={`
              ${
                showSelectLogin
                  ? "bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
                  : "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
              }`}>
            <a
              href="/login"
              className={`group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors 
              ${
                showSelectLogin
                  ? "bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ffffff] group:text-white transition-colors"
                  : "hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors"
              }`}
            >
              <RiAdminLine className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4 py-10">
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutCircleRLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
