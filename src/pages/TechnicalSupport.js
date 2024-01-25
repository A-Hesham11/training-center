import React, { useState } from "react";
import TechnicalSupportImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const TechnicalSupport = () => {

  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={TechnicalSupportImg}
          title="سياسة الدعم الفنى"
          main="الرئيسية"
          branch="سياسة الدعم الفنى"
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            حرصا من مركز مهارات متقدمة للتدريب على تحقيق الأهداف التدريبية
            والتطويرية، فقد تم توفير آليات اتصال تقنية لتواصل المدربين
            والمتدربين مع فريق الدعم الفني للحصول على الإرشادات والحلول على مدار
            الساعة
          </p>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة الدعم الفني
          </p>
          <p className="text-lg text-mainGray mb-2">
            يعمل فريق الدعم الفني لتوفير خدماته لكافة مستخدمي المنصة الإلكترونية
            بعدة طرق حتى تتناسب مع كافة الرغبات الأسهل للمستخدمين ومنها:
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              دعم عبر برامج وتطبيقات الوصول لأجهزة المستخدمين مثل “TeamViewer”.
            </li>
            <li>دعم عبر برامج محادثات التواصل الاجتماعي (واتساب -تويتر).</li>
            <li>دعم مباشر عبر الهاتف.</li>
            <li>دعم داخل قاعة التدريب.</li>
            <li>دعم عبر البريد الإلكتروني.</li>
            <li>دعم عبر نموذج الدعم الفني بالموقع الإلكتروني.</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            المستفيدين من خدمات الدعم الفني
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              مدربي المركز المسجلين بالمنصة الإلكترونية لغرض تقديم الدورات
              التدريبية.
            </li>
            <li>
              جميع المتدربين المنضمين الى للدورات التدريبية على منصتنا التدريبية
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            قنوات تقديم الدعم الفني
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              مركز الاتصال المباشر 0534699908 خلال أوقات العمل الرسمي من الأحد
              إلى الخميس من الساعة 9صباحاً الى 5 مساءاً واثناء أوقات إقامة
              الدورات التدريبية.
            </li>
            <li>البريد الإلكتروني للخدمات والدعم الفني</li>
            <li>الواتس اب : 0534699908</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            الخدمات والأنظمة المشمولة بالدعم الفني
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              الالتحاق بالدورات وحل المشكلات التقنية التي تواجه المستخدمين.
            </li>
            <li>
              التدريب على المنصة الإلكترونية واستخدامها والاستفادة من مزاياها.
            </li>
            <li>التأهيل اللازم للمستخدمين.</li>
            <li>تسجيل الدخول الى المنصة التعليمية وإنشاء حساب للمتدرب.</li>
            <li>حضور الدورة واستخدام تطبيقات البث المباشر.</li>
            <li>دخول المدرب للمنصة.</li>
            <li>استخراج شهادة المتدرب من منصة منار.</li>
            <p className="my-2 text-mainGray text-lg">الوقت المتوقع للرد:</p>
            <li>
              في حال كان الدعم عن طريق الواتس اب سواء من مدرب أو متدرب يتم الرد
              عليه خلال فترة زمنية قصيرة. البريد الالكتروني قد يستغرق 30 دقيقة
              لاستلام البريد ومن ثم الرد عليه
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            الإجراء المتبع في حال تجاوز الطلب الوقت المحدد للرد (سياسة تصعيد
            الطلب في حال عدم الرد في المدة المحددة):
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              يحق للمستفيد تصعيد الطلب لأحد الجهات المعنية والمختصة مثل المؤسسة
              العامة للتدريب التقني والمهني او المركز الوطني للتعليم الالكتروني
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            الأدوار والمسؤوليات والصلاحيات
          </p>
          <p className="text-lg text-mainGray mb-2">
            تنقسم الأدوار المطلوبة للقيام بالدعم الفني على عدة مستويات:
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              المستوى الأول: مركز الاتصال لخدمة العملاء ويقوم باستقبال جميع
              الاتصالات الواردة وكذلك تقديم الدعم الفني الأولي لها حسب طبيعة
              الاستفسارات الواردة أو تحويلها للإدارة المختصة.
            </li>
            <li>
              المستوى الثاني: القسم التشغيلي المساند ويتم من خلال هذا القسم
              استكمال عملية الدعم الفني والتحقق من انتهائها.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            ساعات العمل
          </p>
          <ul className="list_style text-mainGray text-lg">
            <li>من الأحد إلى الخميس من الساعة 9صباحاً الى 5 مساء</li>
          </ul>
        </div>
      </div>

      <div className="container mb-16">
        <h2
          className="text-mainBlack my-8 font-semibold text-3xl"
          data-aos="fade-down"
        >
          دعم فنى 24/7
        </h2>
        <div className="grid grid-cols-12 gap-0 md:gap-8">
          <form
            onSubmit={handleSubmit}
            className="col-span-12 md:col-span-full lg:col-span-7"
            data-aos="zoom-in"
          >
            <div className="row">
              <div className="col-12 mb-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    name="name"
                    id="name"
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                  ></input>
                  <label>الإسم</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    id="phone"
                    placeholder=" "
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label>الجوال</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    id="city"
                    placeholder=" "
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <label>المدينة</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    placeholder=" "
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label>الموضوع</label>
                </div>
              </div>
              <div className="form-group label-float">
                <textarea
                  className="form-control w-full rounded-lg p-3 border"
                  name="message"
                  id="message"
                  cols="30"
                  rows="8"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label>رسالتك</label>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn bg-mainOrange text-white py-4 px-16 rounded-lg font-bold"
              >
                إرسال
              </button>
            </div>
          </form>
          <div
            className="col-span-12 lg:col-span-5 pt-8 md:pt-3"
            data-aos="zoom-in"
          >
            <div className="flex items-center gap-2">
              <FaMobileScreenButton size={28} />
              <p className="font-semibold text-xl">0534699908</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <FaRegCalendarDays size={26} />
              <p className="font-semibold text-xl">من الأحد الى الخميس</p>
            </div>
            <div className="flex items-center gap-2">
              <LuAlarmClock size={27} />
              <p className="font-semibold text-xl">
                من الساعه 9 صباحا - 5 مساء
              </p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <HiOutlineMail size={27} />
              <p className="font-semibold text-xl">advance.skills3@gmail.com</p>
            </div>
            <p className="font-semibold text-xl text-mainOrange">
              يسعدنا خدمتكم فى أى وقت !
            </p>
          </div>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default TechnicalSupport;
