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
import "aos/dist/aos.css";
import AOS from "aos";
import { t } from "i18next";
import { useIsRTL } from "../../hooks/useIsRTL";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const location = useLocation();
  const locationPath = location.pathname;

  const locationPathName =
    locationPath === "/details"
      ? "/details"
      : locationPath === "/courseDetails"
      ? "/courseDetails"
      : "";

  const pathName = locationPath !== locationPathName;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, [navToggle]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      const currentPosition = window.scrollY;

      const scrolled = currentPosition > 120;
      setIsFirstPage(!scrolled);

      setVisible(currentPosition < scrollPosition);

      setScrollPosition(currentPosition <= 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navLinks = [
    { path: "/", label: t("Main") },
    { path: "/courses", label: t("Courses") },
    { path: "/trainers", label: t("Trainers") },
    { path: "/aboutUs", label: t("About us") },
    { path: "/callUs", label: t("Call us") },
  ];

  const isRTL = useIsRTL();

  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  const toggleLang = () => {
    i18n.changeLanguage(isRTL ? "en" : "ar");
  };

  return (
    <nav
      className={`relative z-50 py-2 ${
        visible
          ? `${isFirstPage && pathName ? "" : "bg-white shadow"}`
          : "hidden"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className={`${isFirstPage && pathName ? "w-36" : "w-24"}`}
          />
          <ul
            className={`${
              navToggle ? "grid" : "hidden lg:grid"
            } grid-cols-2 lg:grid-cols-7 md:grid-cols-6 items-center gap-6 navbar`}
            data-aos="zoom-in"
          >
            {navLinks.map((link) => (
              <li key={link.path} className="text-center nav_list">
                {link.path === "/" ? (
                  <IoHomeOutline
                    size="28"
                    className="w-full static lg:hidden"
                  />
                ) : link.path === "/courses" ? (
                  <MdCastForEducation
                    size="28"
                    className="w-full static lg:hidden"
                  />
                ) : link.path === "/trainers" ? (
                  <LiaChalkboardTeacherSolid
                    size="28"
                    className="w-full static lg:hidden"
                  />
                ) : link.path === "/aboutUs" ? (
                  <FaUsersLine size="28" className="w-full static lg:hidden" />
                ) : link.path === "/callUs" ? (
                  <BiPhoneCall size="28" className="w-full static lg:hidden" />
                ) : null}
                <Link
                  to={link.path}
                  className={`font-semibold text-lg ${
                    locationPath == link.path
                      ? "border-b-2 border-mainBlack"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="col-span-1 lg:col-span-2 text-center w-max m-auto flex gap-5">
              <Link
                to="/signIn"
                className="flex flex-col items-center gap-0 lg:gap-2 lg:flex-row nav_list"
              >
                <FaRegUserCircle className="w-full size-7 mb-1 lg:size-5 lg:mb-0" />
                <span className="font-semibold">{t("Login")}</span>
              </Link>

              <button
                type="button"
                className="animate_from_top  animation_delay-3 text-white bg-mainOrange hover:bg-orange-300 transition-all duration-200 text-base w-8 h-8 py-[1px] px-[4px] rounded-md font-normal"
                onClick={() => toggleLang()}
              >
                {isRTL ? "Ar" : "En"}
              </button>
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
