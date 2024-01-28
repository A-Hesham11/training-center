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
          دورات مميزة
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {goodCourses.map((course) => (
            <Card
              id={course.id}
              image={course.image}
              alt={course.alt}
              title={course.title}
              price={course.price}
              titleBtn={course.titleBtn}
              link="/details"
            />
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
          أفضل المدربين
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {BestTrainersData.map((course) => (
            <BestTrainers
              id={course.id}
              trainerImage={course.trainerImage}
              alt={course.alt}
              trainerName={course.trainerName}
              trainerInfo={course.trainerInfo}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <PersonalGoals />
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default HomePage;
