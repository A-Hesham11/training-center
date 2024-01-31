import React from "react";
import AboutUsImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import { IoMdCheckmark } from "react-icons/io";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { t } from "i18next";

const AboutUs = () => {
  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={AboutUsImg}
          title="About us"
          main="Main"
          branch="About us"
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
            {t("About us")}
          </h2>
          <ul className="list_style text-mainBlack text-lg">
            <li>{t("Advanced skills training center")}</li>
            <li>
              {t(
                "An accredited training center licensed by the General Organization for Technical and Vocational Training."
              )}
            </li>
            <li>
                {t("An accredited training center licensed by the General Organization for Technical and Vocational Training We offer development training courses in the health field and the media field Which contributes to developing human resources to be qualified for the work environment.")}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">{t("Vision")}:</h2>
          <ul className="list_style text-mainGray text-lg">
            <li>
                {t("To be a distinguished and advanced center locally and regionally in the field of training, and contribute to building and developing employees’ capabilities in providing all training solutions in line with what the labor market requires and achieves its goals.")}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
            {t("The message:")}
          </h2>
          <ul className="list_style text-lg text-mainGray">
            <li className="text-lg">
                {t("Providing distinguished training programs and consultations in accordance with international quality standards to prepare and qualify human cadres in many fields, in addition to improving the quality of performance in the private and public sectors through training and development with the aim of reaching better performance that helps achieve the goals of society.")}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
            {t("Our goals:")}
          </h2>
          <ul className="list_style text-lg text-mainGray">
            <li>
                {t("The center aims to provide distinguished training services to institutions and individuals with high efficiency, effectiveness and professionalism as follows: –")}
            </li>
            <li>
                {t("Preparing training plans on thoughtful scientific foundations that meet the needs of society and public institutions in the country.")}
            </li>
            <li>
                {t("Providing training and consulting proposals to relevant authorities in accordance with applicable regulations.")}
            </li>
            <li>
                {t("Providing training and consulting proposals to relevant authorities in accordance with applicable regulations.")}
            </li>
            <li>
                {t("Permanent and continuous development of training programs in light of the needs and opinions of the target groups.")}
            </li>
            <li>
                {t("Strengthening the concept of partnership and cooperation with local and international training institutions in accordance with regulating legislation.")}
            </li>
            <li>
                {t("Striving to obtain international accreditation for the training course programs implemented within the center.")}
            </li>
            <li>
                {t("Raising the performance efficiency of the center’s trainers and employees in order to enhance the center’s competitive position.")}
            </li>
            <li>{t("Providing a distinguished training environment.")}</li>
            <li>{t("Spreading a culture of development and self-learning.")}</li>
          </ul>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default AboutUs;
