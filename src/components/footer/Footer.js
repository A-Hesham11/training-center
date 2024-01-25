import React from "react";
import LogoFooter from "../../assets/logo_footer.png";
import { FaTwitter } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaSnapchatGhost } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-mainBlack">
      <div className="container">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2 text-center md:text-right">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                <img
                  src={LogoFooter}
                  alt="logo"
                  className="block mx-auto md:mx-0"
                />
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  مركز تدريب معتمد ومرخص من المؤسسة العامة للتدريب التقني
                  والمهني نقدم الدورات التدريبية التطويرية في المجال الصحي ومجال
                  الإعلام التي تساهم في تطوير الكوادر البشرية لتكون مؤهله لبيئة
                  العمل.
                </li>
                <li className="mb-4">
                  <ul className="flex items-center justify-center md:justify-start">
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
                <li className="mb-4 text-mainOrange">من الأحد الى الخميس</li>
                <li className="mb-4 text-mainOrange">
                  من الساعه 9 صباحا - 5 مساء
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-white">
                خدماتنا
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link href="/" className="footer_list">
                    دورات فى المجال الصحى
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/" className="footer_list">
                    دورات فى مجال الاعلام
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="footer_list">
                    دورات فى المجالات العامه
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-white">
                روابط هامة
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <Link to="/الشروط" className="footer_list">
                    الشروط والأحكام
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/السياسات" className="footer_list">
                    السياسات العامة
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/الدعم_الفني" className="footer_list">
                    سياسة الدعم الفنى
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="footer_list">
                    الشكاوى والأقتراحات
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-white">
                روابط الموقع
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="footer_list">
                    إتصل بنا
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footer_list">
                    من نحن
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footer_list">
                    المدربين
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="footer_list">
                    الدورات
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 flex gap-2 items-center justify-center text-white border-t-[1px] border-mainGray w-full">
        جميع الحقوق محفوظة ©2024 | هذا القالب صنع{" "}
        <span>
          <FaHeart size={20} className="fill-mainOrange" />
        </span>{" "}
        بواسطة <span>Ahmed Hesham</span>
      </div>
    </footer>
  );
};

export default Footer;
