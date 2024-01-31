import React from "react";
import ConditionsImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { t } from "i18next";

const TermsAndConditions = () => {
  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={ConditionsImg}
          title="الشروط والأحكام"
          main="الرئيسية"
          branch="الشروط والأحكام"
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Hello dear customer:")}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "At the Advanced Skills Training Center, your visit to us and your completion of any request is considered acceptance and is subject to the terms and conditions, so please read them."
              )}
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("trade mark :")}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "The trademark and designs that we use on the site or in our social media accounts are all ours, and no one has the right to copy them and use them commercially without obtaining our approval."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Exchange and return policy:")}
          </p>
          <ul className="list_style text-mainGray text-lg">
            <li>
              {t(
                "The customer must verify the entered data and course details before completing the order, and his lack of familiarity with the necessary details makes him bear full responsibility for any error or misunderstanding that may occur."
              )}
            </li>
            <li>
              {t(
                "The client must be registered with an activated and private email address in order for certificates to be issued to him/her."
              )}{" "}
            </li>
            <li>
              {t(
                "If a refund is requested for the amount paid, it will be made only 24 hours before the start of the course. If the client is late, the request will not be exchangeable or refundable."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Errors beyond our control:")}
          </p>
          <p className="text-lg text-mainGray mb-2">
            {t(
              "Products that are added by mistake or at an incorrect price, we have the right to cancel or reject the order whether the order has been confirmed or not, and if payment is made we will refund the full amount to the customer. Amendment to terms and conditions:"
            )}{" "}
            <span className="font-semibold text-lg text-mainBlack">
              {t("Amendment to terms and conditions:")}
            </span>
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "The center has the right to activate or disable any promotional offers without prior announcement."
              )}
            </li>
            <li>
              {t(
                "The Center has the right to stop promotions at any time and without prior notice."
              )}
            </li>
            <li>
              {t(
                "The store has the right to include or exclude any product from promotional offers."
              )}
            </li>
            <li>
              {t(
                "All promotions and discounts are announced only on our official accounts or through the website."
              )}
            </li>
            <li>
              {t(
                "The store has the right to modify prices as it deems appropriate and without prior announcement or notification. This does not apply to orders that have been completed and not shipped “unless they fall under the category of errors beyond our control.”"
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
            {t("privacy policy:")}
          </h2>
          <ul className="list_style text-lg text-mainGray">
            <li>
                {t("Data recorded on the site: The data you enter when registering or completing the application (email - name in Arabic and English - ID - mobile number) are all used only for the purpose of the electronic platform.")}
            </li>
            <li>
                {t("All customer data must be correct and specific to only one customer for the process to be completed correctly, such as (email - name - mobile number).")}
            </li>
            <li>
                {t("All your data is encrypted and stored securely, and no one has the right to access it except those with authority.")}
            </li>
            <li>
                {t("We do not sell the data to any external parties, and it is used only for the purpose of the center.")}
            </li>
          </ul>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default TermsAndConditions;
