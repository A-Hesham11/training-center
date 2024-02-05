import React from "react";
import LandingHome from "../components/landing/LandingHome";
import Introduction from "../components/introduction/Introduction";
import Card from "../components/card/Card";

import Makeup from "../assets/mackup.jpeg";
import Nursing from "../assets/c2.jpg";
import LearnNewSkills from "../components/learnSkills/LearnNewSkills";
import BestTrainers from "../components/bestTrainers/BestTrainers";
import Trainer_1 from "../assets/trainer_1.jpg";
import Trainer_2 from "../assets/trainer_2.jpg";
import Trainer_3 from "../assets/trainer_3.jpg";
import PersonalGoals from "../components/learnSkills/PersonalGoals";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import { t } from "i18next";

const HomePage = () => {
  const goodCourses = [
    {
      id: 1,
      image: Nursing,
      alt: "Nursing",
      title: "دورة التهيئه لاختبار التمريض البرومترك السعودي ",
      price: "",
      titleBtn: "سجل الان ",
    },
    {
      id: 2,
      image: Makeup,
      alt: "Makeup",
      title: "60+ كورس متنوع",
      price: "700 ريال",
      titleBtn: "سجل الان ",
    },
  ];

  const BestTrainersData = [
    {
      id: 1,
      trainerImage: Trainer_1,
      alt: "Trainer_1",
      trainerName: "أ.محمد الهتانى",
      trainerInfo:
        "أ.محمد الهتانى  مدرب معتمد لدى العديد من الجامعات والمعاهد الرسمية  ……..",
    },
    {
      id: 2,
      trainerImage: Trainer_2,
      alt: "Trainer_2",
      trainerName: "د – محمد القاضى",
      trainerInfo:
        "د – محمد القاضى  مدرب معتمد لدى العديد من الجامعات والمعاهد الرسمية  ……..",
    },
    {
      id: 3,
      trainerImage: Trainer_3,
      alt: "Trainer_3",
      trainerName: "د – هناء عبدالسلام",
      trainerInfo:
        "د – هناء عبدالسلام  مدرب معتمد لدى العديد من الجامعات والمعاهد الرسمية  ……..",
    },
  ];

  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingHome />
      </div>

      <div className="my-20">
        <Introduction />
      </div>

      <div className="container my-24">
        <h2
          className="text-mainBlack mb-14 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          {t("Distinctive courses")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {goodCourses.map((course, index) => (
            <div key={index}>
              <Card
                id={course.id}
                image={course.image}
                alt={course.alt}
                title={course.title}
                price={course.price}
                titleBtn={course.titleBtn}
                link="/details"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <LearnNewSkills />
      </div>

      <div className="container">
        <h2
          className="text-mainBlack mt-28 mb-14 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          {t("The best trainers")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {BestTrainersData.map((course, index) => (
            <div key={index}>
              <BestTrainers
                id={course.id}
                trainerImage={course.trainerImage}
                alt={course.alt}
                trainerName={course.trainerName}
                trainerInfo={course.trainerInfo}
              />
            </div>
          ))}
        </div>
      </div>

      <div className=" h-80 flex items-center">
        <div className="container">
          <h2
            className="text-mainBlack mb-14 font-semibold text-5xl text-center"
            data-aos="fade-down"
          >
            {t("Our customers")}
          </h2>
          <p className="text-xl font-medium text-mainBlack mb-2" data-aos="zoom-in-up">
            {t(
              "Welcome to the heart of our success - the stories of our valued clients. At Advanced skills training center, we take pride in the meaningful impact our courses have had on individuals and organizations. Explore the testimonials below to discover how our tailored solutions have transformed lives and careers."
            )}
          </p>
        </div>
      </div>

      <div className=" bg-[#cccccc2e] h-80 flex items-center">
        <div className="container">
          <h2
            className="text-mainBlack mb-14 font-semibold text-5xl text-center"
            data-aos="fade-down"
          >
            {t("They said about us")}
          </h2>
          <p className="text-xl font-medium text-mainBlack mb-2" data-aos="zoom-in-up">
            {t(
              "Include a variety of testimonials from different students, highlighting their diverse experiences and the impact your courses have had on them. Make sure to obtain permission to use their names and possibly include their photos for authenticity."
            )}
          </p>
        </div>
      </div>

      <div className=" h-80 flex items-center">
        <div className="container">
          <h2
            className="text-mainBlack mb-14 font-semibold text-5xl text-center"
            data-aos="fade-down"
          >
            {t("Success Partners")}
          </h2>
          <p className="text-xl font-medium text-mainBlack mb-2" data-aos="zoom-in-up">
            {t(
              "We thank all our partners for their constant support and contribution to the success of our educational courses. If you would like to join our list of partners, do not hesitate to contact the Partnerships Team for more information."
            )}
          </p>
        </div>
      </div>

      <div>
        <PersonalGoals />
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default HomePage;
