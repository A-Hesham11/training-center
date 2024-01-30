import React, { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtonGoUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 550) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phoneNumber = "+201069602992";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex">
      <div>
        <Link
          to={handleWhatsAppClick}
          className={`bg-[#0cc344] text-white rounded-full p-3 fixed right-4 duration-300 shadow ${
            showButton ? "bottom-20" : "bottom-6"
          }`}
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp size={25} />
        </Link>
      </div>
      <div>
        <button
          className={`bg-mainOrange text-white rounded-full p-3 fixed bottom-6 duration-300 shadow ${
            showButton ? "right-4" : "-right-20"
          }`}
          onClick={scrollToTop}
        >
          <FaArrowTurnUp size={25} />
        </button>
      </div>
    </div>
  );
};

export default ButtonGoUp;
