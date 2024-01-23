import React from "react";
import AboutUsImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import { IoMdCheckmark } from "react-icons/io";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={AboutUsImg}
          title="من نحن"
          main="الرئيسية"
          branch="من نحن"
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <h2 className="font-semibold text-2xl my-2">من نحن؟</h2>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange" />
            <p className="text-xl">مركز مهارات متقدمة للتدريب</p>
          </div>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange" />
            <p className="text-xl">
              مركز تدريب معتمد ومرخص من المؤسسة العامة للتدريب التقني والمهني.
            </p>
          </div>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={36} className="fill-mainOrange" />
            <p className="text-xl">
              نؤمن بأهمية التدريب وتحقيقه للتغيير الإيجابي لذلك نعمل على تقديم
              الدورات التدريبية التطويرية المتكاملة لعملائنا التي تساهم في تطوير
              الكوادر البشرية لتكون مؤهله لبيئة العمل.
            </p>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-2xl my-2">الرؤية:</h2>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={36} className="fill-mainOrange" />
            <p className="text-xl">
              أن يكون مركز متميز ومتطور محليا وإقليميا في مجال التدريب، ويساهم
              في بناء وتطوير قدرات الموظفين في تقديم جميع الحلول التدريبية بما
              يتلاءم مع ما يتطلبه سوق العمل ويحقق أهدافه.
            </p>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-2xl my-2">الرسالة:</h2>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={46} className="fill-mainOrange h-7" />
            <p className="text-xl">
              توفير برامج واستشارات تدريبية متميزة وفقا للمقاييس العالمية للجودة
              لإعداد وتأهيل الكوادر البشرية في العديد من المجالات بالإضافة إلى
              تحسين جودة الأداء في القطاعين الخاص والعام بالتدريب والتطوير بهدف
              الوصول الى اداء أفضل يساعد على تحقيق اهداف المجتمع.
            </p>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-2xl my-2">اهدافنا:</h2>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              يهدف المركز إلى تقديم خدمات تدريبية مميزة للمؤسسات والافراد بكفاءة
              وفاعلية واحترافية عالية على النحو التالي: –
            </p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              إعداد الخطط التدريبية على أسس علمية مدروسة تلبي احتياجات المجتمع
              والمؤسسات العامة بالدولة.
            </p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              اعداد برامج تدريبية وفق الاحتياجات المطلوبة لتنمية المهارات
              والقدرات لأفراد القطاعين: العام والخاص وتلبي حاجة السوق والمجتمع.
            </p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              تقديم المقترحات التدريبية والاستشارية للجهات ذات العلاقة وفق
              الأنظمة المعمول بها.
            </p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              التطوير الدائم والمستمر للبرامج التدريبية في ضوء الاحتياجات، وآراء
              الفئات المستهدفة.
            </p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              تعزيز مفهوم الشراكة والتعاون مع المؤسسات التدريبية المحلية
              والدولية وفق التشريعات المنظمة.
            </p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              السعي وراء الحصول على الاعتماد الدولي لبرامج الدورات التدريبية
              المنفذة داخل المركز.
            </p>
          </div>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">
              رفع كفاءة الأداء للمدربين والعاملين بالمركز بما يعزز الوضع
              التنافسي للمركز.
            </p>
          </div>
          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">توفير بيئة تدريبية متميزة .</p>
          </div>

          <div className="flex gap-2 my-1">
            <IoMdCheckmark size={26} className="fill-mainOrange h-7" />
            <p className="text-xl">نشر ثقافة التطوير والتعلم الذاتي.</p>
          </div>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default AboutUs;
