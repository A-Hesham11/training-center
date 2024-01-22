import React, { useEffect, useState } from "react";
import LandingHomeImg from "../../assets/landingHome.png";
import "aos/dist/aos.css";
import AOS from "aos";

const LandingHome = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // Initialize AOS library after the component is mounted
    AOS.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <header className="">
      <img src={LandingHomeImg} alt="landing" className="fixed top-0 h-full" />
      <div className="fixed w-1/3 top-1/2 translate-y-[-50%] mx-48">
        <h2 className="title_animation font-bold text-4xl text-mainBlack mb-4">
          مركز مهارات متقدمة للتدريب
        </h2>
        {showContent && (
          <div data-aos="fade-up">
            <p className="text-mainGray text-lg mb-4">
              مركز تدريب معتمد ومرخص من المؤسسة العامة للتدريب التقني والمهني نقدم
              الدورات التدريبية التطويرية في المجال الصحي ومجال الإعلام التي تساهم
              في تطوير الكوادر البشرية لتكون مؤهله لبيئة العمل.
            </p>
            <button className="bg-mainOrange text-white py-4 px-6 rounded-xl font-bold">
              المنصة التعليمية
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHome;
