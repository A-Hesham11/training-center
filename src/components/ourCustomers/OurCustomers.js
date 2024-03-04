import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo1 from "../../assets/OIP (1).jpeg";
import Logo2 from "../../assets/OIP (2).jpeg";
import Logo3 from "../../assets/OIP.jpeg";
import Logo4 from "../../assets/th (1).jpeg";
import Logo5 from "../../assets/th.jpeg";
import { t } from "i18next";

const OurCustomers = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  console.log("🚀 ~ OurCustomers ~ windowSize:", windowSize);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const customersLogo = [
    { img: Logo1 },
    { img: Logo2 },
    { img: Logo3 },
    { img: Logo4 },
    { img: Logo5 },
  ];

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  const getSettingsForScreenSize = () => {
    const largeSettings = {
      ...settings,
      slidesToShow: 6,
    };
    const mediumSettings = {
      ...settings,
      slidesToShow: 5,
    };
    const smallSettings = {
      ...settings,
      slidesToShow: 3,
    };
    const lessSmallSettings = {
      ...settings,
      slidesToShow: 2,
    };

    return windowSize.width >= 1028
      ? largeSettings
      : windowSize.width >= 768 && windowSize.width <= 1028
      ? mediumSettings
      : windowSize.width >= 480 && windowSize.width <= 768
      ? smallSettings
      : lessSmallSettings;
  };

  return (
    <div className="customer bg-[#cccccc2e] h-96 flex items-center my-20">
      <div className="container">
        <h2
          className="text-mainBlack mb-20 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          {t("Our customers")}
        </h2>
        <div className="slider-container mt-12" data-aos="zoom-in-up">
          <Slider {...getSettingsForScreenSize()}>
            {customersLogo.map((customer, index) => (
              <div key={index} className="rounded-md overflow-hidden">
                <img
                  src={customer.img}
                  alt="customers"
                  className="w-32 h-28 m-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;

// const isLargeScreen = useMediaQuery({ minWidth: 1200 });
// const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
// const isSmallScreen = useMediaQuery({ maxWidth: 767 });

// let slidesToShow = 5; // Default for large screens

// if (isLargeScreen) {
//   slidesToShow = 5;
// } else if (isMediumScreen) {
//   slidesToShow = 3;
// } else if (isSmallScreen) {
//   slidesToShow = 1;
// }
