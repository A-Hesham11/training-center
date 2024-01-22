import React from "react";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="relative z-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className="flex items-center justify-between gap-6 fixed md:static bottom-0">
            <li>
              <Link to="/" className="font-semibold text-lg">الرئيسية</Link>
            </li>
            <li>
              <Link to="/courses" className="font-semibold text-lg">الدورات</Link>
            </li>
            <li>
              <Link to="/trainers" className="font-semibold text-lg">المدربين</Link>
            </li>
            <li>
              <Link to="/aboutUs" className="font-semibold text-lg">من نحن</Link>
            </li>
            <li>
              <Link to="/CallUs" className="font-semibold text-lg">إتصل بنا</Link>
            </li>
            <li>
              <button className="flex items-center gap-3">
                <FaRegUserCircle />
                <span>تسجيل / دخول</span>
              </button>
            </li>
          </ul>
          <LuLayoutGrid />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
