import React, { Fragment, useEffect, useState } from "react";
import LandingHomeImg from "../../assets/landingHome.png";
import "aos/dist/aos.css";
import AOS from "aos";
import NavBar from "../navBar/NavBar";

const LandingHome = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize AOS library after the component is mounted
    AOS.init({ duration: 1200, once: true,  offset: 150, });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="relative">
      <img src={LandingHomeImg} alt="landing" className="h-screen" />
      <div className="fixed top-0 w-full z-50">
        <NavBar />
      </div>
      <div className="container">
        <div className="landing_content absolute w-[90%] sm:w-min top-1/2 -translate-y-1/2 text-center md:text-right px-3">
          <h2 className="title_animation font-bold text-4xl text-mainBlack mb-4">
            مركز مهارات متقدمة للتدريب
          </h2>
          {showContent && (
            <div data-aos="fade-up">
              <p className="text-mainGray text-lg mb-5">
                مركز تدريب معتمد ومرخص من المؤسسة العامة للتدريب التقني والمهني
                نقدم الدورات التدريبية التطويرية في المجال الصحي ومجال الإعلام
                التي تساهم في تطوير الكوادر البشرية لتكون مؤهله لبيئة العمل.
              </p>
              <button className="btn bg-mainOrange text-white py-4 px-6 rounded-xl font-bold">
                المنصة التعليمية
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default LandingHome;
