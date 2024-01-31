import React, { useState } from "react";
import LandingPages from "../components/landing/landingPages";
import CoursesImg from "../assets/landingHome.png";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { t } from "i18next";
import { useIsRTL } from "../hooks/useIsRTL";

const CallUs = () => {
  const [formData, setFormData] = useState({
    message: "",
    uname: "",
    email: "",
    subject: "",
  });

  const isRTL = useIsRTL()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={CoursesImg}
          title="Call us"
          main="Main"
          branch="Call us"
        />
      </div>

      <div className="container mb-16">
        <h2
          className="text-mainBlack mt-28 mb-16 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          {t("Call us")}
        </h2>
        <div className="grid grid-cols-12 gap-0 md:gap-8">
          <form onSubmit={handleSubmit} className="col-span-12 md:col-span-full lg:col-span-7" data-aos="zoom-in">
            <div className="row">
              <div className="col-12 mb-6">
                <div className="form-group label-float">
                  <textarea
                    className="form-control w-full rounded-lg p-3 border"
                    name="message"
                    id="message"
                    cols="30"
                    rows="8"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("Your letter")}</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="flex items-center gap-4 flex-col md:flex-row">
                  <div className="w-full">
                    <div className="form-group label-float">
                      <input
                        className="form-control w-full rounded-lg p-3 border"
                        id="name"
                        placeholder=" "
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("Name")}</label>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-group label-float">
                      <input
                        className="form-control w-full rounded-lg p-3 border"
                        id="email"
                        placeholder=" "
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("E-mail")}</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn bg-mainOrange text-white py-4 px-16 rounded-lg font-bold"
              >
                {t("Send")}
              </button>
            </div>
          </form>
          <div className="col-span-12 lg:col-span-5 pt-8 md:pt-3" data-aos="zoom-in">
            <div className="flex items-center gap-2">
              <FaMobileScreenButton size={28}/>
              <p className="font-semibold text-xl">0534699908</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <FaRegCalendarDays size={26}/>
              <p className="font-semibold text-xl">{t("From Sunday to Thursday")}</p>
            </div>
            <div className="flex items-center gap-2">
              <LuAlarmClock size={27}/>
              <p className="font-semibold text-xl">{t("From 9 am - 5 pm")}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <HiOutlineMail size={27}/>
              <p className="font-semibold text-xl">advance.skills3@gmail.com</p>
            </div>
            <p className="font-semibold text-xl text-mainOrange">{t("We are happy to serve you at any time!")}</p>
          </div>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default CallUs;
