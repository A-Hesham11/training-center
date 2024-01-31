import React, { useState } from "react";
import TechnicalSupportImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { t } from "i18next";
import { useIsRTL } from "../hooks/useIsRTL";

const TechnicalSupport = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
    city: "",
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
          landingImage={TechnicalSupportImg}
          title={t("Technical support policy")}
          main={t("Main")}
          branch={t("Technical support policy")}
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <p className="font-semibold text-xl mt-2 mb-5 text-mainBlack">
            {t(
              "In order for the Advanced Skills Training Center to achieve training and development goals, technical communication mechanisms have been provided for trainers and trainees to communicate with the technical support team to obtain instructions and solutions around the clock."
            )}
          </p>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Technical support policy")}
          </p>
          <p className="text-lg text-mainGray mb-2">
            {t(
              "The technical support team works to provide its services to all users of the electronic platform in several ways to suit all users’ desires, including:"
            )}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "Support via access programs and applications for user devices such as “TeamViewer”."
              )}
            </li>
            <li>
              {t(
                "Support via social media chat programs (WhatsApp - Twitter)."
              )}
            </li>
            <li>{"Live support via phone."}</li>
            <li>{t("Support inside the training room.")}</li>
            <li>{t("Email support.")}</li>
            <li>
              {t("Support via the technical support form on the website.")}
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl mb-2 mt-4 text-mainBlack">
            {t("Beneficiaries of technical support services")}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "Center trainers registered on the electronic platform for the purpose of providing training courses."
              )}
            </li>
            <li>
              {t(
                "All trainees joining training courses on our training platform"
              )}
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Technical support channels")}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "Direct call center 0534699908 during official working hours from Sunday to Thursday from 9 am to 5 pm and during training course times."
              )}
            </li>
            <li>{t("Email for services and technical support")}</li>
            <li>{t("WhatsApp: 0534699908")}</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Services and systems covered by technical support")}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "Joining courses and solving technical problems facing users."
              )}
            </li>
            <li>
              {t(
                "Training on the electronic platform, using it and taking advantage of its advantages."
              )}
            </li>
            <li>{t("Necessary qualification of users.")}</li>
            <li>
              {t(
                "Log in to the educational platform and create an account for the trainee."
              )}
              .
            </li>
            <li>
              {t("Attend the course and use live streaming applications.")}
            </li>
            <li>{t("The trainer enters the platform.")}</li>
            <li>
              {t(
                "Extracting the trainee’s certificate from the Manar platform."
              )}
            </li>
            <p className="font-semibold text-xl my-2 text-mainBlack">
              {t("Expected response time:")}
            </p>
            <li>
              {t(
                "If the support is via WhatsApp, whether from a trainer or trainee, it will be responded to within a short period of time. Email It may take up to 30 minutes to receive the mail and then respond to it"
              )}
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t(
              "The procedure to be followed if the request exceeds the time specified for a response (the policy of escalating the request in the event of a non-response within the specified period):"
            )}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "The beneficiary has the right to escalate the request to one of the concerned and competent authorities, such as the General Corporation for Technical and Vocational Training or the National Center for E-Learning"
              )}
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Roles, responsibilities and powers")}
          </p>
          <p className="text-lg text-mainGray mb-2">
            {t(
              "The roles required to carry out technical support are divided into several levels:"
            )}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "The first level: The customer service call center receives all incoming communications, as well as provides initial technical support to them according to the nature of the incoming inquiries, or transfers them to the relevant department."
              )}
            </li>
            <li>
              {t(
                "The nature of the inquiries received or their referral to the competent department."
              )}
            </li>
            <li>
              {t(
                "The second level: Supportive Operational Section. Through this section, the technical support process is completed and verified."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("work hours")}
          </p>
          <ul className="list_style text-mainGray text-lg">
            <li>{t("From Sunday to Thursday from 9 am to 5 pm")}</li>
          </ul>
        </div>
      </div>

      <div className="container mb-16">
        <h2
          className="text-mainBlack my-8 font-semibold text-3xl"
          data-aos="fade-down"
        >
          {t("Technical support 24/7")}
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
                    id="city"
                    placeholder=" "
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <label className={`${isRTL ? "right-5" : "left-5"}`}>{t("City")}</label>
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

      <ButtonGoUp />
    </main>
  );
};

export default TechnicalSupport;
