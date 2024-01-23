import React from "react";
import PersonalGoalsImg from "../../assets/PersonalGoals.png";

const PersonalGoals = () => {
  return (
    <div className="bg-[#cccccc2e] py-28">
      <div className="container">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
          <div data-aos="zoom-in-left">
            <img src={PersonalGoalsImg} alt="Personal Goals" />
          </div>
          <div data-aos="zoom-in-right">
            <h2 className="text-3xl font-semibold">
              اتخذ الخطوة التالية نحو أهدافك الشخصية والمهنية معنا.
            </h2>
            <p className="text-[#10285d] my-4">
              طور ذاتك عن دريق باقة من أفضل الدورات التدريبية لتضمن تحقيق هدفك
              بسهولة ويسر.
            </p>
            <button className="btn bg-mainOrange text-white py-4 px-6 rounded-lg font-bold">
              سجل الان بالمجان
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGoals;
