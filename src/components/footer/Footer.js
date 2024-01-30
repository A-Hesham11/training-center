import React from "react";
import LogoFooter from "../../assets/logo_footer.png";
import { FaTwitter } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaSnapchatGhost } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTiktok, IoMagnet } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Mada from "../../assets/mada.svg";
import Visa from "../../assets/visa.svg";
import Master from "../../assets/master.svg";
import Applepay from "../../assets/applepay.svg";
import Googlepay from "../../assets/googlepay.svg";
import { t } from "i18next";

const Footer = () => {
  const location = useLocation();
  const locationPath = location.pathname;

    const locationPathName = locationPath === "/details" ? "/details" : locationPath === "/courseDetails" ? "/courseDetails" : "";

    const pathName = locationPath === locationPathName;

  return (
    <footer className="bg-mainBlack">
      <div className="container">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-5 md:grid-cols-2 text-center md:text-start">
            <div className="col-span-1 lg:col-span-2">
              <a href="/" className="mb-6 text-sm font-semibold text-white">
                <img
                  src={LogoFooter}
                  alt="logo"
                  className="block mx-auto md:mx-0"
                />
              </a>
              <ul className="text-white font-medium">
                <li className="my-4 pe-0 lg:pe-7">
                  {t("An accredited training center licensed by the General Organization for Technical and Vocational Training We offer development training courses in the health field and the media field Which contributes to developing human resources to be qualified for the work environment.")}
                </li>
                <li className="mb-4">
                  <ul className="flex items-center justify-center md:justify-start gap-4">
                    <li className="bg-[#8088ff1a] duration-500 hover:bg-mainOrange rounded-full w-12 h-12 flex items-center justify-center">
                      <a href="https://twitter.com/" target="Starfall">
                        <FaTwitter size={22} />
                      </a>
                    </li>
                    <li className="bg-[#8088ff1a] duration-500 hover:bg-mainOrange rounded-full w-12 h-12 flex items-center justify-center">
                      <a href="https://web.telegram.org/a/" target="Starfall">
                        <BiLogoTelegram size={22} />
                      </a>
                    </li>
                    <li className="bg-[#8088ff1a] hover:bg-mainOrange rounded-full w-12 h-12 flex items-center justify-center">
                      <a
                        href="https://accounts.snapchat.com/accounts/v2/login"
                        target="Starfall"
                      >
                        <FaSnapchatGhost size={22} />
                      </a>
                    </li>
                    <li className="bg-[#8088ff1a] hover:bg-mainOrange rounded-full w-12 h-12 flex items-center justify-center">
                      <a href="https://www.instagram.com/" target="Starfall">
                        <FiInstagram size={22} />
                      </a>
                    </li>
                    <li className="bg-[#8088ff1a] hover:bg-mainOrange rounded-full w-12 h-12 flex items-center justify-center">
                      <a href="https://www.tiktok.com/" target="Starfall">
                        <IoLogoTiktok size={22} />
                      </a>
                    </li>
                  </ul>
                </li>
                {pathName && (
                  <li className="mb-4">
                    <ul className="flex items-center justify-center md:justify-start gap-4">
                      <li>
                        <img src={Mada} alt="Mada" className="w-14 h-8 bg-white border p-2 rounded-md" />
                      </li>
                      <li>
                        <img src={Visa} alt="Visa" className="w-14 h-8 bg-white border p-2 rounded-md"/>
                      </li>
                      <li>
                        <img src={Master} alt="Master" className="w-14 h-8 bg-white border p-2 rounded-md"/>
                      </li>
                      <li>
                        <img src={Applepay} alt="Applepay" className="w-14 h-8 bg-white border p-2 rounded-md"/>
                      </li>
                      <li>
                        <img src={Googlepay} alt="Googlepay" className="w-14 h-8 bg-white border p-2 rounded-md"/>
                      </li>
                    </ul>
                  </li>
                )}
                <li className="mb-4 text-mainOrange">{t("From Sunday to Thursday")}</li>
                <li className="mb-4 text-mainOrange">
                  {t("From 9 am - 5 pm")}
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 font-semibold text-2xl text-white">
                {t("Our services")}
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    {t("Courses in the health field")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    {t("Courses in the field of media")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    {t("Courses in general fields")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 font-semibold text-2xl text-white">
                {t("Important links")}
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/terms_Conditions" className="footer_list">
                    {t("Terms and Conditions")}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/policies" className="footer_list">
                    {t("Public policies")}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/technical_support" className="footer_list">
                    {t("Technical support policy")}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/callUs" className="footer_list">
                    {t("Complaints and suggestions")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 font-semibold text-2xl text-white">
                {t("Website links")}
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/callUs" className="footer_list">
                    {t("Call us")}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/aboutUs" className="footer_list">
                    {t("Abou us")}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/trainers" className="footer_list">
                    {t("Trainers")}
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/courses" className="footer_list">
                    {t("Courses")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 flex gap-2 items-center justify-center flex-col sm:flex-row text-white border-t-[1px] border-mainGray w-full text-sm">
        {t("All rights are save")} ©2024 | {t("This mold is made")}{" "}
        <span>
          <FaHeart size={20} className="fill-mainOrange" />
        </span>{" "}
        <p>
          {t("by")} <span>Hisham</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
