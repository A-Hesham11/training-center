import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaUsersLine } from "react-icons/fa6";
import { BiPhoneCall } from "react-icons/bi";
import Logo from "../../assets/logo2.png";
import LogoFooter from "../../assets/logo_footer.png";
import "aos/dist/aos.css";
import AOS from "aos";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, [navToggle]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsFirstPage(!scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { path: "/", label: "الرئيسية" },
    { path: "/الدورات", label: "الدورات" },
    { path: "/المدربين", label: "المدربين" },
    { path: "/من_نحن", label: "من نحن" },
    { path: "/إتصل_بنا", label: "إتصل بنا" },
  ];

  return (
    <nav
      className={`relative ${isFirstPage ? "" : "bg-white shadow-xl"} z-50 py-2`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            {isFirstPage ? (
              <img src={Logo} alt="logo" />
            ) : (
              <img src={LogoFooter} alt="logo" width={100} />
            )}
          </div>
          <ul
            className={`${
              navToggle ? "grid" : "hidden lg:grid"
            } grid-cols-2 lg:grid-cols-7 md:grid-cols-6 items-center gap-6 navbar`}
            data-aos="zoom-in"
          >
            {navLinks.map((link) => (
              <li key={link.path} className="text-center nav_list">
                {link.path === "/" ? (
                  <IoHomeOutline size="28" className="w-full static lg:hidden" />
                ) : link.path === "/الدورات" ? (
                  <MdCastForEducation size="28" className="w-full static lg:hidden" />
                ) : link.path === "/المدربين" ? (
                  <LiaChalkboardTeacherSolid size="28" className="w-full static lg:hidden" />
                ) : link.path === "/من_نحن" ? (
                  <FaUsersLine size="28" className="w-full static lg:hidden" />
                ) : link.path === "/إتصل_بنا" ? (
                  <BiPhoneCall size="28" className="w-full static lg:hidden" />
                ) : null}
                <Link
                  to={link.path}
                  className={`font-semibold text-lg ${
                    location.pathname === link.path ? "border-b-2 border-mainBlack" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="col-span-1 lg:col-span-2 text-center w-max m-auto nav_list">
              <Link to="/التسجيل" className="flex flex-col items-center gap-0 lg:gap-3 lg:flex-row">
                <FaRegUserCircle className="w-full size-7 mb-1 lg:size-5 lg:mb-0" />
                <span>تسجيل / دخول</span>
              </Link>
            </li>
          </ul>
          <button
            className="static lg:hidden"
            onClick={() => setNavToggle(!navToggle)}
          >
            <LuLayoutGrid
              size="34"
              className={`cursor-pointer duration-500 hover:text-mainOrange hover:-rotate-45 ${
                navToggle ? "-rotate-45 text-mainOrange" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
