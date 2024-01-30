import React from "react";
import PersonalGoalsImg from "../../assets/PersonalGoals.png";
import { t } from "i18next";

const PersonalGoals = () => {
  return (
    <div className="bg-[#cccccc2e] py-28">
      <div className="container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-aos="zoom-in">
            <img src={PersonalGoalsImg} alt="Personal Goals" />
          </div>
          <div data-aos="zoom-in">
            <h2 className="text-3xl font-semibold">
              {t("Take the next step towards your personal and professional goals with us.")}
            </h2>
            <p className="text-[#10285d] my-4">
              {t("Develop yourself through a package of the best training courses that ensure you achieve your goal easily and conveniently.")}
            </p>
            <button className="btn bg-mainOrange text-white py-4 px-6 rounded-lg font-bold">
              {t("Register now for free")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGoals;
