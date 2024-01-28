import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/navBar/NavBar";
import { FiDownload } from "react-icons/fi";
import { SlBookOpen } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { TbMinus } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";
import "aos/dist/aos.css";
import { FaRegStar } from "react-icons/fa6";

const CourseDetails = () => {
  const [isToggle, setIsToggle] = useState(true);

  const courseDetails = {
    id: 1,
    title: "دورات في المجالات العامة",
    desc: "اساسيات التصوير  الفوتوغرافي ...حضورية تبدأ 30ديسمبر -31ديسمبر بواقع ساعتين باليوم",
    info: "التعرف على سر فن التصوير الفوتوغرافي مع المدربة والمصورة (مها العقيل)",
    course_data: [
      { id: 1, key: "التصنيف", value: "دورات في المجالات العامة" },
      { id: 2, key: "المستوى", value: "كل المستويات" },
      { id: 3, key: "مدة الدورة", value: "04:00:00" },
      { id: 4, key: "عدد الطلاب", value: 0 },
    ],
    number: 1,
    time: "04:00:00",
    price: "590.00",
    discound: "00.00",
    titleBtn: "تسجيل",
  };

  const rightSideRef = useRef(null);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("🚀 ~ handleScroll ~ scrollY:", scrollY)

      if (scrollY >= 975) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCollapseToggle = () => {
    setIsToggle(!isToggle);
  };

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<FaRegStar key={i} />);
  }

  const lines = [];

  for (let i = 0; i < 5; i++) {
    lines.push(<div className="bg-gray-200 w-60 h-3 rounded-full"></div>);
  }

  return (
    <main className="">
      <div className="fixed top-0 w-full z-50">
        <NavBar />
      </div>

      <div className="container mb-16 mt-36">
        <p className="text-mainGray mt-4 mb-5 font-semibold" data-aos="fade-up">
          الدورات / {courseDetails.title}
        </p>
        <div className="grid grid-cols-12 gap-8 relative overflow-hidden">
          <div className="col-span-12 lg:col-span-8">
            <p className="text-2xl font-semibold" data-aos="fade-up">
              {courseDetails.desc}
            </p>
            <p
              className="text-mainGray mt-4 mb-5 font-semibold"
              data-aos="fade-up"
            >
              {courseDetails.info}
            </p>
            <div className="flex items-center gap-8">
              {courseDetails.course_data.map((detail) => (
                <div key={detail.id} data-aos="zoom-in-up">
                  <h2 className="text-md text-mainBlack font-medium">
                    {detail.key}
                  </h2>
                  <p className="text-sm text-mainGray font-medium">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2
                className="text-2xl font-semibold text-mainBlack my-12 border-b-[3px] w-fit border-mainBlack pb-2"
                data-aos="fade-up"
              >
                عن الدورة
              </h2>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-mainBlack">الوصف</h3>
                <p className="text-mainGray text-md">
                  دورة حضورية في اساسيات التصوير الفوتوغرافي ستكتسبين المهارات
                  الاساسية لتحويل لحظاتك الى تحف فوتوغرافية وستتقنين فنون التقاط
                  اللحظات وتحويلها الى لوحات فوتوغرافية رائعة
                </p>
              </div>

              <div className="my-6" data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-mainBlack">
                  متطلبات الدورة
                </h3>
                <p className="text-mainGray text-md">احضار الكاميرا ان توفرت</p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-2xl font-semibold text-mainBlack">
                  ماذا ستتعلم؟
                </h3>
                <ul className="list_style text-mainGray text-md">
                  <li>اساسيات التصوير</li>
                  <li>تصوير الافراح</li>
                  <li>توزيع الاضاءة</li>
                  <li>معالجة الصور</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-mainBlack my-12 border-b-[3px] w-fit border-mainBlack pb-2">
                المواد
              </h2>
              <div className="border-2 rounded-md">
                <div
                  className="h-[72px] px-4 border-b flex items-center gap-2 cursor-pointer duration-500"
                  onClick={handleCollapseToggle}
                >
                  <FaPlus size={22} />
                  <p className="text-mainGray text-md">
                    اساسيات التصوير الفوتوغرافي
                  </p>
                </div>
                <div
                  className={`px-4 cursor-pointer flex items-center gap-2 duration-500 ${
                    isToggle ? "h-0 overflow-hidden" : "h-[72px]"
                  }`}
                >
                  <FaRegBookmark size={22} />
                  <p>اعمال المصورة المبدعة مها العقيل</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-2xl font-semibold text-mainBlack my-12 border-b-[3px] w-fit border-mainBlack pb-2">
                التقييمات
              </h2>
              <div className="flex items-center justify-between h-44">
                <div className="rounded-md shadow border flex items-center gap-7 flex-col h-full px-12 justify-center">
                    <p>0</p>
                    <p>تقييم الدورة</p>
                    <div className="flex items-center gap-1 justify-center">
                      {stars.map((star, index) => (
                        // Add a key to each rendered icon
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                  {lines.map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 justify-center">
                      {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 justify-center">
                      {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 justify-center">
                      {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 justify-center">
                      {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                    <p>0</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 justify-center">
                      {stars.map((star, index) => (
                        <span key={index}>{star}</span>
                      ))}
                    </div>
                    <p>0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative col-span-12 lg:col-span-4"
            data-aos="fade-up"
          >
            <div
              className={` bg-white shadow p-6 rounded-md ${
                !isFixed ? "fixed w-[26.5%]" : "absolute bottom-0 left-0 w-full"
              } `}
              ref={rightSideRef}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-mainBlack">
                  {" "}
                  <span>{courseDetails.price} </span> ر.س
                </h2>
                <p className="text-[#788ea4]">
                  {" "}
                  <span>{courseDetails.discound} </span> ر.س
                </p>
              </div>
              <a href="/">
                <button className="text-mainBlack border w-full py-2 border-[#E2E4FF] mx-auto mt-4 font-medium rounded-md">
                  {" "}
                  {courseDetails.titleBtn}{" "}
                </button>
              </a>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FiDownload />
                  <p>تحميل المرفقات</p>
                </div>
                <p>نعم</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SlBookOpen />
                  <p>مادة تعليمية</p>
                </div>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseDetails;
