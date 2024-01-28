import React from "react";
import CardRegistration from "../components/card/CardRegistration";
import Nursing from "../assets/c2.jpg";
import Makeup from "../assets/mackup.jpeg";
import NavBar from "../components/navBar/NavBar";

const CoursesDetails = () => {
  const goodCourses = [
    {
      id: 1,
      image: Nursing,
      alt: "Nursing",
      title: "دورات في المجالات العامة",
      desc: "اساسيات التصوير  الفوتوغرافي ...حضورية تبدأ 30ديسمبر -31ديسمبر بواقع ساعتين باليوم",
      number: 1,
      time: "04:00:00",
      price: "590.00",
      discound: "",
      titleBtn: "تسجيل",
    },
    {
      id: 2,
      image: Makeup,
      alt: "Makeup",
      title: "دورات في المجالات العامة",
      desc: "اساسيات فن المكياج الاحترافي تبدأ يوم الاحد 3 ديسمبر الساعة 8 مساء",
      number: 1,
      time: "06:00:00",
      price: "608.70",
      discound: "1500.00",
      titleBtn: "تسجيل",
    },
  ];

  return (
    <main className="relative">
      <div className="fixed top-0 w-full z-50">
        <NavBar />
      </div>

      <div className="container mb-16 mt-36">
        <p className="font-bold text-lg text-mainBlack">
          دورات في المجالات العامة
        </p>
        <p className="text-mainGray mt-4 mb-5 font-semibold">الدورات</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {goodCourses.map((course) => (
            <CardRegistration
              id={course.id}
              image={course.image}
              alt={course.alt}
              title={course.title}
              desc={course.desc}
              number={course.number}
              time={course.time}
              price={course.price}
              discound={course.discound}
              titleBtn={course.titleBtn}
              link="/courseDetails"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoursesDetails;
