import { NavLink } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
const AltNavbar = () => {
  const navLinks = (
    <>
      <li className="hover:text-[#4ecbd9]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-l from-[#111b3c] to-[#006e7b] px-4  py-2  text-white rounded"
              : "px-4 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-[#4ecbd9]">
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-l from-[#111b3c] to-[#006e7b] px-4 py-2 text-white rounded"
              : "px-4 py-2"
          }
        >
          Resume
        </NavLink>
      </li>
     
      <li className="hover:text-[#4ecbd9]">
      <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-l from-[#111b3c] to-[#006e7b] px-4  py-2  text-white rounded"
              : "px-4 py-2"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full z-[100] bg-transparent absolute">
      <div className="max-w-screen-xl py-4 mx-auto flex items-center justify-between">
        <div className="dropdown px-4">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-[#4ecbd9]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu font-semibold space-y-3 px-4 dropdown-content my-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>

          <div className="hidden lg:flex items-center gap-2 bg-gradient-to-l from-[#203371] to-[#006e7b] px-4 p-2 rounded-lg shadow-xl text-white">
            <FaLaptopCode size={25} />
          </div>
        </div>

        <div className="flex items-center pr-4 lg:pr-0">
          <div className=" hidden lg:flex">
            <ul className="flex gap-4 text-white font-semibold">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AltNavbar;
