import React, { useEffect, useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

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

  return (
    <button
      className={`bg-mainOrange text-white rounded-full p-4 fixed bottom-6 right-6 shadow ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowTurnUp size={26} />
    </button>
  );
};

export default ButtonGoUp;
