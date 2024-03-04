import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import Client1 from "../../assets/trainer_1.jpg";
import Client2 from "../../assets/trainer_2.jpg";
import Client3 from "../../assets/trainer_3.jpg";
import { t } from "i18next";

const ClientSays = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const clientSays = [
    {
      img: Client1,
      name: "ahmed",
      jobTitle: t("student"),
      desc: t("We Work With the Best Clients"),
    },
    {
      img: Client2,
      name: "mohamed",
      jobTitle: t("student"),
      desc: t("We Work With the Best Clients"),
    },
    {
      img: Client3,
      name: "kariem",
      jobTitle: t("student"),
      desc: t("We Work With the Best Clients"),
    },
    {
      img: Client1,
      name: "mahmoud",
      jobTitle: t("student"),
      desc: t("We Work With the Best Clients"),
    },
    {
      img: Client2,
      name: "mostafa",
      jobTitle: t("student"),
      desc: t("We Work With the Best Clients"),
    },
  ];

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <IoChevronBackOutline />,
    prevArrow: <IoChevronForwardOutline />,
  };

  const getSettingsForScreenSize = () => {
    const largeSettings = {
      ...settings,
      slidesToShow: 3,
    };
    const mediumSettings = {
      ...settings,
      slidesToShow: 2,
    };
    const smallSettings = {
      ...settings,
      slidesToShow: 1,
    };

    return windowSize.width >= 1028
      ? largeSettings
      : windowSize.width >= 768 && windowSize.width <= 1028
      ? mediumSettings
      : windowSize.width >= 480 && windowSize.width <= 768
      ? smallSettings
      : "";
  };

  return (
    <div className="client_says flex items-center my-20">
      <div className="container">
        <h2
          className="text-mainBlack mb-14 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          {t("They said about us")}
        </h2>
        <div className="slider-container " data-aos="zoom-in-up">
          <Slider {...getSettingsForScreenSize()}>
            {clientSays.map((client, index) => (
              <div
                key={index}
                className={`text-center rounded-md overflow-hidden m-auto`}
              >
                <div className={`bg-[#cccccc2e] mx-4 rounded-2xl py-8 px-2`}>
                  <img
                    src={client.img}
                    alt="customers"
                    className="w-24 h-24 rounded-full m-auto"
                  />
                  <p className="mt-4 font-semibold text-2xl">{client.name}</p>
                  <p className="mt-[6px] text-xl">{client.jobTitle}</p>
                  <p className="mt-4 text-xl">{client.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientSays;
