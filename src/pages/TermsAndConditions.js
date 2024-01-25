// import React from 'react'

// const TermsAndConditions = () => {
//   return (
//     <div>TermsAndConditions</div>
//   )
// }

// export default TermsAndConditions

import React from "react";
import ConditionsImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";

const TermsAndConditions = () => {
  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={ConditionsImg}
          title="الشروط والأحكام"
          main="الرئيسية"
          branch="الشروط والأحكام"
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            مرحبا عزيزي/تي العميل/ة :
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              في مركز مهارات متقدمة للتدريب زيارتك لنا واتمامك لأي طلب يعتبر
              موافقة عليها و خاضع للشروط والأحكام ولذلك يرجى قراءتها.
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            العلامة التجارية :{" "}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              العلامة التجارية والتصاميم التي نستخدمها في الموقع او في حسابات
              التواصل الاجتماعي جميعها لنا ولا يحق لأي شخص نسخها واستخدمها
              تجارياً بدون اخذ الموافقة مننا.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسية الاستبدال والاسترجاع:
          </p>
          <ul className="list_style text-mainGray text-lg">
            <li>يجب على العميل التأكد من البيانات المدخلة  وتفاصيل الدورة قبل اتمام الطلب ، وعدم إلمامه بالتفاصيل اللازمة تجعله يتحمل كامل المسؤولية عن أي خطأ او سوء فهم قد يحصل. </li>
            <li>يجب ان يكون العميل/ة مسجل بإيميل مفعل وخاص به ليتم اصدار الشهادات عليه. </li>
            <li>في حال تم طلب الاسترجاع للمبلغ المدفوع يتم قبل بدء الدورة بـ ٢٤ ساعه فقط ، في حال تأخر العميل/ة عن ذلك يكون الطلب غير قابل للاستبدال او استرجاع المبلغ .</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
          الاخطاء الخارجة عن ارادتنا :
          </p>
          <p className="text-lg text-mainGray mb-2">المنتجات التي يتم اضافتها عن طريق الخطأ أو بسعر غير صحيح، فلنا الحق في إلغاء أو رفض الطلب سواء تم او لم يتم تأكيد الطلب، وإذا تم الدفع فسوف نقوم باسترجاع كامل المبلغ للعميل. <span className="font-semibold text-lg text-mainBlack">التعديل في الشروط والاحكام :</span></p>
          <ul className="list_style text-lg text-mainGray">
            <li>يحق للمركز تفعيل او تعطيل لأي عروض ترويجية بدون اعلان مسبق لذلك.</li>
            <li>يحق للمركز ايقاف العروض الترويجية بأي وقت وبدون اعلان مسبق.</li>
            <li>يحق للمركز تفعيل او تعطيل لأي عروض ترويجية بدون اعلان مسبق لذلك.</li>
            <li>يحق للمتجر شمل او استثناء اي منتج من العروض الترويجية.</li>
            <li>جميع العروض الترويجية والتخفيضات يتم الاعلان عنها في حساباتنا الرسمية فقط او عن طريق الموقع.</li>
            <li>يحق للمتجر تعديل الأسعار حسب ما يراه مناسب و بدون اعلان او اخطار مسبق لذلك ولا ينطبق الأمر للطلبات المكتملة ولم يتم شحنها ” الا اذا كانت تحت بند الأخطاء الخارجة عن ارادتنا”</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <h2 className="font-semibold text-xl my-2 text-mainBlack">
          سياسة الخصوصية:
          </h2>
          <ul className="list_style text-lg text-mainGray">
            <li> البيانات التي يتم تسجيلها بالموقع: البيانات التي تدخلها عند التسجيل أو اكمال الطلب (الإيميل – الاسم باللغة العربية والانجليزية – الهوية – رقم الجوال ) جميعها لا يتم استخدامها الا في غرض المنصة الالكترونية فقط. </li>
            <li>يجب أن تكون جميع البيانات الخاصة بالعميل/ة صحيحة وخاصة بعميل/ة واحد فقط لتتم العملية بشكل صحيح مثل (الايميل -الاسم – رقم الجوال).</li>
            <li>جميع بياناتك مشفرة ومخزنة بشكل امن ولا يحق لأي احد الوصول إليها إلا من يمتلك الصلاحية.</li>
            <li>لا نبيع البيانات لأي اطراف خارجية ولا يتم استخدمها إلا بغرض المركز فقط.</li>
          </ul>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default TermsAndConditions;
