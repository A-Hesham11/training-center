import { t } from "i18next";
import React from "react";
import Logo1 from "../../assets/OIP (1).jpeg";
import Logo2 from "../../assets/OIP (2).jpeg";
import Logo3 from "../../assets/OIP.jpeg";
import Logo4 from "../../assets/th (1).jpeg";
import Logo5 from "../../assets/th.jpeg";

const SuccessPartners = () => {
  const PartnerData = [
    { img: Logo1 },
    { img: Logo2 },
    { img: Logo3 },
    { img: Logo4 },
    { img: Logo5 },
  ];
  return (
    <div className="my-20 flex items-center">
      <div className="container">
        <h2
          className="text-mainBlack my-14 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          {t("Success Partners")}
        </h2>
        <div className="">
          <p className="text-mainGray text-xl text-center mb-8" data-aos="fade-down">
            {t(
              "We thank all our partners for their constant support and contribution to the success of our educational courses. If you would like to join our list of partners, do not hesitate to contact the Partnerships Team for more information."
            )}
          </p>
          <div className={`grid items-center grid-cols-3 lg:grid-cols-${PartnerData.length}  gap-8`} data-aos="zoom-in-up">
            {PartnerData.map((partner, index) => (
              <div key={index} className="m-auto">
                <img src={partner.img} alt="partner" className="w-32 h-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPartners;
