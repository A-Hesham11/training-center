import React, { useEffect, useState } from "react";
import LandingSignInImg from "../assets/photo-1561089489-f13d5e730d72.webp";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import Logo from "../assets/logo2.png";
import { t } from "i18next";
import { useIsRTL } from "../hooks/useIsRTL";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [PassToggle, setPassToggle] = useState(false);

  const isRTL = useIsRTL()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <header className="relative">
      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-full bg-black"></div>
        <img
          src={LandingSignInImg}
          alt="landing"
          className="h-screen w-full blur-[3px]"
        />
      </div>

      <div className="container">
        <form
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[460px] sm:w-[72%] bg-[#ffffffe6] py-6 px-7 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-32 m-auto mb-4" />
          </Link>

            <h2 class="mb-5 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
              {t("Login to your account")}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {t("E-mail")}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("E-mail")}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control w-full rounded-xl p-3 border placeholder:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t("Password")}
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={PassToggle ? "text" : "password"}
                  placeholder={t("Password")}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control w-full rounded-xl p-3 border placeholder:text-sm"
                />
                {PassToggle ? (
                  <FaRegEye
                    size={22}
                    className={`absolute top-[30%] fill-gray-500 ${isRTL ? "left-7" : "right-2"} -translate-x-1/2 cursor-pointer`}
                    onClick={() => setPassToggle(!PassToggle)}
                  />
                ) : (
                  <FaRegEyeSlash
                    size={22}
                    className={`absolute fill-gray-500 top-[30%] ${isRTL ? "left-7" : "right-2"} -translate-x-1/2 cursor-pointer`}
                    onClick={() => setPassToggle(!PassToggle)}
                  />
                )}
              </div>

              <div className="text-sm mt-4 mb-1">
                <a href="#" className="font-semibold text-mainGray nav_list">
                 {t("Did you forget your password?")}
                </a>
              </div>
            </div>

            <div className="flex gap-8">
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl bg-mainOrange px-3 py-2 text-base font-semibold text-white shadow hover:bg-[#ff9f67d1] hover:duration-500"
              >
                {t("entrance")}
              </button>
              <Link
                to="/"
                className="flex w-full justify-center rounded-xl bg-white border border-mainOrange px-3 py-2 text-base font-semibold text-mainOrange shadow hover:bg-[#f3f3f3e6] hover:duration-500"
              >
                {t("Back")}
              </Link>
            </div>
          </div>
          <div className="flex gap-1 text-sm mt-6 mb-1 justify-center">
            <p className="text-mainGray">{t("Do you have an account?")}</p>
            <Link
              to="/register"
              className="text-[#dc715d] font-semibold hover:duration-500 nav_list login_list"
            >
              {t("Create an account")}
            </Link>
          </div>
        </form>
      </div>
    </header>
  );
};

export default SignInForm;
