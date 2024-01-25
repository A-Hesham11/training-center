import React, { Fragment, useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import NavBar from "../navBar/NavBar";
import { Link } from "react-router-dom";

const LandingPages = ({ landingImage, title, main, branch }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize AOS library after the component is mounted
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 3800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="relative">
      <div className="relative">
        <img src={landingImage} alt="Courses" className="h-[500px] w-screen" />
      </div>
      <div className="fixed top-0 w-full z-50">
        <NavBar />
      </div>
      <div className="container">
        <div className="landing_content absolute w-min top-1/2 -translate-y-1/2 text-center md:text-right">
          <h2 className="title_animation font-bold text-4xl text-white mb-4">
            {title}
          </h2>
          <ul className="flex items-center gap-2 text-white">
            <li className="text-white font-bold cursor-pointer"><Link to="/">{main}</Link></li>
            <li>|</li>
            <li className="text-white rounded-xl font-bold cursor-pointer">{branch}</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default LandingPages;
