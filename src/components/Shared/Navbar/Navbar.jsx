import React from "react";
import { BiSolidDashboard, BiSolidMessageSquareAdd } from "react-icons/bi";
import { FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/pngwing.com.png";
const Navbar = () => {
  return (
    <nav className="col-span-3 bg-primary rounded-2xl h-[calc(100vh-3rem)] py-5 px-10 text-gray-200">
      <div className="flex items-center justify-center gap-2">
        <figure className="w-20 h-20  bg-white p-2 rounded-full ">
          <img src={logo} alt="" />
        </figure>
        <h1 className="text-3xl ">TaskSync</h1>
      </div>
      <ul className="py-5 border-b space-y-3">
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <BiSolidDashboard size={24} /> Dashboard
          </Link>
        </li>
        <li>
          <Link to={"/createTask"} className="flex items-center gap-2 text-lg">
            <BiSolidMessageSquareAdd size={24} /> Create Task
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <RiTeamFill size={24} /> Team Collaboration
          </Link>
        </li>
      </ul>
      <ul className="py-5 space-y-3">
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <FaUserCircle size={24} /> Profile
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <FaCog size={24} /> Settings
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2 text-lg">
            <FaSignOutAlt size={24} /> Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
