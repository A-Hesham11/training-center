import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUsersLine } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import "aos/dist/aos.css";
import AOS from "aos";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, [navToggle]);

  return (
    <nav className="relative z-10">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <ul className={`${navToggle ? "grid" : "hidden lg:grid"} grid-cols-2 md:grid-cols-6  items-center gap-y-6 navbar`} data-aos="zoom-in">
            <li className="col-span-1 text-center">
              <IoHomeOutline size="28" className="w-full static lg:hidden" />
              <Link to="/" className="font-semibold text-lg">
                الرئيسية
              </Link>
            </li>
            <li className="col-span-1 text-center">
              <MdCastForEducation
                size="28"
                className="w-full static lg:hidden"
              />
              <Link to="/courses" className="font-semibold text-lg">
                الدورات
              </Link>
            </li>
            <li className="col-span-1 text-center">
              <LiaChalkboardTeacherSolid
                size="28"
                className="w-full static lg:hidden"
              />
              <Link to="/trainers" className="font-semibold text-lg">
                المدربين
              </Link>
            </li>
            <li className="col-span-1 text-center">
              <FaUsersLine size="28" className="w-full static lg:hidden" />
              <Link to="/aboutUs" className="font-semibold text-lg">
                من نحن
              </Link>
            </li>
            <li className="col-span-1 text-center">
              <BiPhoneCall size="28" className="w-full static lg:hidden" />
              <Link to="/CallUs" className="font-semibold text-lg">
                إتصل بنا
              </Link>
            </li>
            <li className="col-span-1 text-center w-max m-auto">
              <button className="flex flex-col items-center gap-0 lg:gap-3 lg:flex-row">
                <FaRegUserCircle  className="w-full size-7 mb-1 lg:size-5 lg:mb-0"/>
                <span>تسجيل / دخول</span>
              </button>
            </li>
          </ul>
          <button className="static lg:hidden" onClick={() => setNavToggle(!navToggle)}>
            <LuLayoutGrid size="32" className="cursor-pointer hover:text-mainOrange hover:-rotate-45" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
