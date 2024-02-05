import React, { useState } from "react";
import LandingPages from "../components/landing/landingPages";
import TrainersImg from "../assets/landingHome.png";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import { t } from "i18next";
import { useIsRTL } from "../hooks/useIsRTL";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const JoinTrainers = () => {
    const [formData, setFormData] = useState({
        message: "",
        name: "",
        email: "",
        subject: "",
        phone: "",
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
          landingImage={TrainersImg}
          title="Join our trainers"
          main="Main"
          branch="Join our trainers"
        />
      </div>

      <div className="container mb-20">
        <div>
          <h2
            className="text-mainBlack mt-28 mb-14 font-semibold text-5xl text-center"
            data-aos="fade-down"
          >
            {t("Join Our Trainers")}
          </h2>
          <p className="list_style text-mainBlack text-lg">{t("Certainly! When creating a Join Our Trainers page for your courses website, you'll want to attract potential trainers and provide them with information about the benefits of joining your platform. Here's a sample description you can use as a starting point: Join Our Trainers Are you passionate about sharing your expertise and empowering others through education? Join our vibrant community of educators and become a valued member of our team! As a dedicated platform for courses and learning, we are actively seeking experienced and enthusiastic trainers to contribute to our mission of fostering knowledge and skill development.")}</p>
        </div>

        <div className="container mb-16">
        <h2
          className="text-mainBlack my-8 font-semibold text-3xl"
          data-aos="fade-down"
        >
          {t("Join Our Trainers")}
        </h2>
        <div className="grid grid-cols-12 gap-0 md:gap-8">
          <form
            onSubmit={handleSubmit}
            className="col-span-12 md:col-span-full lg:col-span-7"
            data-aos="zoom-in"
          >
            <div className="row">
              <div className="col-12 mb-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    name="name"
                    id="name"
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                  ></input>
                  <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("Name")}</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    id="phone"
                    placeholder=" "
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("phone")}</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    id="email"
                    placeholder=" "
                    type="email"
                    name="email"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("E-mail")}</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    placeholder=" "
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("The topic")}</label>
                </div>
              </div>
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
            <div className="mt-4">
              <button
                type="submit"
                className="btn bg-mainOrange text-white py-4 px-16 rounded-lg font-bold"
              >
                {t("Send")}
              </button>
            </div>
          </form>
          <div
            className="col-span-12 lg:col-span-5 pt-8 md:pt-3"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-2">
              <FaMobileScreenButton size={28} />
              <p className="font-semibold text-xl">0534699908</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <FaRegCalendarDays size={26} />
              <p className="font-semibold text-xl">من الأحد الى الخميس</p>
            </div>
            <div className="flex items-center gap-2">
              <LuAlarmClock size={27} />
              <p className="font-semibold text-xl">
                من الساعه 9 صباحا - 5 مساء
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <HiOutlineMail size={27} />
              <p className="font-semibold text-xl">advance.skills3@gmail.com</p>
            </div>
            <p className="font-semibold text-xl text-mainOrange">
              يسعدنا خدمتكم فى أى وقت !
            </p>
          </div>
        </div>
      </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default JoinTrainers;
