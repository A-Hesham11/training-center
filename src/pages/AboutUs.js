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
          <h2 className="font-semibold text-xl my-2 text-mainBlack">من نحن؟</h2>
          <ul className="list_style text-mainBlack text-lg">
            <li>مركز مهارات متقدمة للتدريب</li>
            <li>
              مركز تدريب معتمد ومرخص من المؤسسة العامة للتدريب التقني والمهني.
            </li>
            <li>
              نؤمن بأهمية التدريب وتحقيقه للتغيير الإيجابي لذلك نعمل على تقديم
              الدورات التدريبية التطويرية المتكاملة لعملائنا التي تساهم في تطوير
              الكوادر البشرية لتكون مؤهله لبيئة العمل.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">الرؤية:</h2>
          <ul className="list_style text-mainGray text-lg">
            <li>
              أن يكون مركز متميز ومتطور محليا وإقليميا في مجال التدريب، ويساهم
              في بناء وتطوير قدرات الموظفين في تقديم جميع الحلول التدريبية بما
              يتلاءم مع ما يتطلبه سوق العمل ويحقق أهدافه.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
            الرسالة:
          </h2>
          <ul className="list_style text-lg text-mainGray">
            <li className="text-lg">
              توفير برامج واستشارات تدريبية متميزة وفقا للمقاييس العالمية للجودة
              لإعداد وتأهيل الكوادر البشرية في العديد من المجالات بالإضافة إلى
              تحسين جودة الأداء في القطاعين الخاص والعام بالتدريب والتطوير بهدف
              الوصول الى اداء أفضل يساعد على تحقيق اهداف المجتمع.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
            اهدافنا:
          </h2>
          <ul className="list_style text-lg text-mainGray">
            <li>
              يهدف المركز إلى تقديم خدمات تدريبية مميزة للمؤسسات والافراد بكفاءة
              وفاعلية واحترافية عالية على النحو التالي: –
            </li>
            <li>
              إعداد الخطط التدريبية على أسس علمية مدروسة تلبي احتياجات المجتمع
              والمؤسسات العامة بالدولة.
            </li>
            <li>
              اعداد برامج تدريبية وفق الاحتياجات المطلوبة لتنمية المهارات
              والقدرات لأفراد القطاعين: العام والخاص وتلبي حاجة السوق والمجتمع.
            </li>
            <li>
              تقديم المقترحات التدريبية والاستشارية للجهات ذات العلاقة وفق
              الأنظمة المعمول بها.
            </li>
            <li>
              التطوير الدائم والمستمر للبرامج التدريبية في ضوء الاحتياجات، وآراء
              الفئات المستهدفة.
            </li>
            <li>
              تعزيز مفهوم الشراكة والتعاون مع المؤسسات التدريبية المحلية
              والدولية وفق التشريعات المنظمة.
            </li>
            <li>
              السعي وراء الحصول على الاعتماد الدولي لبرامج الدورات التدريبية
              المنفذة داخل المركز.
            </li>
            <li>
              رفع كفاءة الأداء للمدربين والعاملين بالمركز بما يعزز الوضع
              التنافسي للمركز.
            </li>
            <li>توفير بيئة تدريبية متميزة .</li>
            <li>نشر ثقافة التطوير والتعلم الذاتي.</li>
          </ul>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default AboutUs;
