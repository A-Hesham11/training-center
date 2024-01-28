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

const Footer = () => {
  const location = useLocation();
  const locationPath = location.pathname;

    const locationPathName = locationPath === "/details" ? "/details" : locationPath === "/courseDetails" ? "/courseDetails" : "";

    const pathName = locationPath === locationPathName;

  return (
    <footer className="bg-mainBlack">
      <div className="container">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-5 md:grid-cols-2 text-center md:text-right">
            <div className="col-span-1 lg:col-span-2">
              <a href="/" className="mb-6 text-sm font-semibold text-white">
                <img
                  src={LogoFooter}
                  alt="logo"
                  className="block mx-auto md:mx-0"
                />
              </a>
              <ul className="text-white font-medium">
                <li className="my-4 pl-0 lg:pl-7">
                  مركز تدريب معتمد ومرخص من المؤسسة العامة للتدريب التقني
                  والمهني نقدم الدورات التدريبية التطويرية في المجال الصحي ومجال
                  الإعلام التي تساهم في تطوير الكوادر البشرية لتكون مؤهله لبيئة
                  العمل.
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
                <li className="mb-4 text-mainOrange">من الأحد الى الخميس</li>
                <li className="mb-4 text-mainOrange">
                  من الساعه 9 صباحا - 5 مساء
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 font-semibold text-2xl text-white">
                خدماتنا
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    دورات فى المجال الصحى
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    دورات فى مجال الاعلام
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    دورات فى المجالات العامه
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 font-semibold text-2xl text-white">
                روابط هامة
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/terms_Conditions" className="footer_list">
                    الشروط والأحكام
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/policies" className="footer_list">
                    السياسات العامة
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/technical_support" className="footer_list">
                    سياسة الدعم الفنى
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/callUs" className="footer_list">
                    الشكاوى والأقتراحات
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 font-semibold text-2xl text-white">
                روابط الموقع
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="/callUs" className="footer_list">
                    إتصل بنا
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/aboutUs" className="footer_list">
                    من نحن
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/trainers" className="footer_list">
                    المدربين
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/courses" className="footer_list">
                    الدورات
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 flex gap-2 items-center justify-center flex-col sm:flex-row text-white border-t-[1px] border-mainGray w-full text-sm">
        جميع الحقوق محفوظة ©2024 | هذا القالب صنع{" "}
        <span>
          <FaHeart size={20} className="fill-mainOrange" />
        </span>{" "}
        <p>
          بواسطة <span>Hisham</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
