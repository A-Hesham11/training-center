import React from "react";
import LandingPages from "../components/landing/landingPages";
import CoursesImg from "../assets/landingHome.png"
import Makeup from "../assets/mackup.jpeg"
import Card from "../components/card/Card";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import { t } from "i18next";

const Courses = () => {

  const newCourses = [
    {
      id: 1,
      image: Makeup,
      alt: "Makeup",
      title: "أساسيات فن المكياج الأحترافى",
      desc: "أساسيات فن المكياج الأحترافى",
      price: "700 ريال",
      titleBtn: "المزيد",
    },
  ];


  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages landingImage={CoursesImg} title="Courses" main="Main" branch="Courses" />
      </div>
      
      <div className="container mb-16">
        <h2 className="text-mainBlack mt-28 mb-14 font-semibold text-5xl text-center" data-aos="fade-down">
          {t("Latest courses")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {newCourses.map((course) => (
            <Card
              id={course.id}
              image={course.image}
              alt={course.alt}
              title={course.title}
              desc={course.desc}
              price={course.price}
              titleBtn={course.titleBtn}
            />
          ))}
        </div>
      </div>

      <ButtonGoUp/>
    </main>
  );
};

export default Courses;
