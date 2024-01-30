import React from "react";
import BestTrainers from "../components/bestTrainers/BestTrainers";
import Trainer_1 from "../assets/trainer_1.jpg";
import Trainer_2 from "../assets/trainer_2.jpg";
import Trainer_3 from "../assets/trainer_3.jpg";
import LandingPages from "../components/landing/landingPages";
import TrainersImg from "../assets/landingHome.png"
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import { t } from "i18next";

const Trainers = () => {

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
        <LandingPages
          landingImage={TrainersImg}
          title="Trainers"
          main="Main"
          branch="Trainers"
        />
      </div>

      <div className="container mb-20">
        <h2 className="text-mainBlack mt-28 mb-14 font-semibold text-5xl text-center" data-aos="fade-down">
          {t("The best trainers")}
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

      <ButtonGoUp/>
    </main>
  );
};

export default Trainers;
