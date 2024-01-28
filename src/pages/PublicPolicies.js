import React from "react";
import PoliciesImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const PublicPolicies = () => {
  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={PoliciesImg}
          title="السياسات العامة"
          main="الرئيسية"
          branch="السياسات العامة"
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة النزاهة
          </p>
          <p className="text-mainBlack text-lg my-2">
            سياسات وقوانين النزاهة وأهمية الالتزام بها:
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              النزاهة مطلب أساسي في جميع التعاملات داخل الجهة والتي تؤكد على
              أهمية الصدق والأمانة على كل فرد في البيئة التدريبية الإلكترونية من
              مدربين ومتدربين وإداريين.
            </li>
            <li>
              ومن منطلق الحفاظ على القيم الأخلاقية العلمية والمهنية التي يحثنا
              عليها ديننا الحنيف، ويعمل مركز مهارات متقدمة للتدريب دوما علي
              تعزيزها في بيئته التدريبية من خلال التشديد الدائم علي الالتزام
              بأعلى معايير النزاهة سواء من جهة المدربين والعاملين بالمركز أو
              المتدربين، حيث يتولى مركز مهارات متقدمة للتدريب مسئولية تهيئة بيئة
              تتوافر بها مستويات رفيعة من النزاهة من خلال وضع معايير وضوابط
              للعملية التدريبية تعمل علي تحقيق النزاهة في كافة مراحل العملية
              التدريبية بداية من تسجيل المتدربين بالبرامج التدريبية أو أثناء
              التدريب أو في مرحلة الاختبارات والنتائج، حيث يؤمن مركزنا بأن تعزيز
              النزاهة تمثل جزءًا أساسيًا من النمو الشخصي والفكري للمتدرب، وأن
              زيادة وعي المتدرب والمدربون والموظفين بالقضايا ذات الصلة بالنزاهة
              من خلال تعزيز مناخ تسوده روح الثقة والأمانة والمعايير الأخلاقية
              الرفيعة يساهم بدور رئيس في تقدم المجتمع وازدهاره من خلال تخريج
              كوادر قادرة علي تحمل مسئولية تقدم ورفعة الوطن نظرا لما تتمتع به من
              القيم الأخلاقية العالية.
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            أشكال انتهاك النزاهة:
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              الغش: وهو نقل أعمال الآخرين والاستخدام غير المصرح به لأي معلومات
              ومواد تدريبية في الاختبارات الأكاديمية أو غيرها من المهام الموكلة
              للمتدربين.
            </li>
            <li>
              الانتحال الأدبي والسرقة الفكرية: وهي استخدام عمل الأخرين كأنه عمل
              الشخص، دون الإشارة إلي صاحب العمل الأصلي.
            </li>
            <li>
              استغلال التعاون: اعتماد المتدرب على متدرب آخر ضمن مجموعته لإنجاز
              واجب أو عمل مشترك، أو استغلال متدرب آخر لإنجاز الواجبات الفردية
            </li>
            <li>التلفيق والتزوير:</li>
            <ul className="list-[arabic-indic] flex flex-col gap-1">
              <li>
                إقدام المتدرب على تغيير المعلومات المتاحة له أو تلفيقها في
                اختبار أو واجب، أو إحضاره لشهادة طبية مزوّرة من أجل التغيب عن
                الحضور.
              </li>
              <li>
                تلقي المتدرب اي مساعدة في الاختبارات أو تقديم معلومات لمتدرب
                آخر او احضار أوراق خارجية في الاختبار والحصول على معلومات لم
                تقدم من قبل معدي الاختبار.
              </li>
              <li>
                الحصول او تقديم مساعدة غير مصرح بها في الامتحانات، أو تلفيق
                المعلومات لدعم نتائج المختبر او اي من الأعمال الأخرى.
              </li>
            </ul>
            <li>
              انتحال شخصية الغير: ادعاء المتدرب صفة غيره داخل الصف، أو في اختبار
              أو امتحان، أو في أي نوع من الواجبات الأكاديمية. وفي هذه الحالة،
              تتم معاقبة المتدرب المنتحل شخصية غيره، والمتدرب الدافع للانتحال
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            الإجراءات والعقوبات التي يتخذها مركز مهارات متقدمة للتدريب عند
            انتهاك النزاهة في بيئة التدريب الإلكتروني، وكذلك للحد من الوقوع في
            مثل هذه الانتهاكات:
          </p>
          <p className="text-mainGray text-lg mb-2">
            في حالة انتحال الهوية أو الغش يحق للجنة التأديب بعد تثبتها من
            المخالفات المحالة إليها، الإيقاع بواحدة أو أكثر من العقوبات التالية:
          </p>
          <ul className="list_style text-mainGray text-lg">
            <li>التنبيه شفهياً وتوثيق ذلك بتعهد خطي أو الإنذار كتابة.</li>
            <li>التوقيف المؤقت للحساب والحرمان من التمتع بخدمات المنصة.</li>
            <li>إلغاء اختبار الدورة في حالات الغش</li>
            <li>عدم استرجاع المبلغ المدفوع في الدورة</li>
            <li>حرمان المتدرب من استلام شهادته</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة حقوق الملكية الفكرية وحقوق النشر
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              تعهد: نتعهد نحن مركز مهارات متقدمة للتدريب في الالتزام ونشر مبادئ
              حقوق الملكية الفكرية وحقوق النشر
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            حقوق الملكية الفكرية وحقوق النشر في بيئة التدريب الإلكتروني:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              حقوق الملكية الفكرية هي مجموعة من الحقوق القانونية التي تحمي أعمال
              المؤلفين والمُبدعين من إعادة إنتاجها واستغلالها من الآخرين دون
              موافقة منهم.
            </li>
            <li>
              ونحن مركز مهارات متقدمة للتدريب نقوم بمهمة تحويل المحتوى العلمي
              المُعد من المدربين الى محتوى رقمي، ويتم إلزام المدربين المشاركين
              في إعداد المحتوى باحترام حقوق الملكية الفكرية والنشر وان يشير الى
              كل المراجع والمصادر المستخدمة في كتابة محتوى الدورة. وأن يقوم
              المدرب قبل البَدْء في صياغة المحتوى بالتوقيع على نموذج تعهد وإقرار
              بإعداد محتوى يحترم جميع قوانين الملكية الفكرية ورخص وحقوق النشر
              والتأليف حسب الأنظمة المعمول بها في المملكة العربية السعودية.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            مبادئ حقوق الملكية الفكرية في مركز مهارات متقدمة للتدريب:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              تلتزم الجهة بحقوق الملكية الفكرية والنشر فيما ينشر في المنصة
              التدريبية.
            </li>
            <li>
              يلتزم المدربين ومن في حكمهم بحقوق الملكية عند تطوير المحتوى.
            </li>
            <li>في حالة استخدام محتوى مفتوح يتم ذكر المصدر.</li>
            <li>
              تلتزم الجهة بفحص محتوى جميع المقررات أو البرامج وأعمال المتدربين
              والتأكد من خلوها من انتهاكات الملكية الفكرية.
            </li>
            <li>سياسة مركز مهارات متقدمة للتدريب في السماح بنشر المحتوى:</li>
            <ul className="list-[arabic-indic] flex flex-col gap-1">
              <li>
                يمنع نشر أي محتوى يتعرض لأشخاص أو مؤسسات أو يظهرهم بطريقة سيئة.
              </li>
              <li>
                يمنع التعدي بنشر أو اقتباس محتوى ذو حقوق فكرية بدون تصريح أو
                موافقة.
              </li>
              <li>يمنع نشر أي محتوى مخالف لتعاليم الدينية أو الأخلاقية.</li>
              <li>
                يمنع نشر أي محتوى يؤثر على الوحدة الوطنية (عنصرية، طائفية،
                قبلية…).
              </li>
              <li>يمنع النشر أو الترويج لأي محتوى أو منتج ذو أهداف تجارية.</li>
            </ul>
            <li>
              في حالة حدوث انتهاك لحقوق الملكية الفكرية يحق للجنة التأديب بعد
              تثبتها من المخالفات المحالة إليها، الإيقاع بواحدة أو أكثر من
              العقوبات التالية:
            </li>
            <ul className="list-[arabic-indic] flex flex-col gap-1">
              <li>التنبيه شفهياً وتوثيق ذلك بتعهد خطي أو الإنذار كتابة.</li>
              <li>التوقيف المؤقت للحساب والحرمان من التمتع بخدمات المنصة.</li>
            </ul>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة حقوق الملكية الفكرية وحقوق النشر
          </p>
          <p className="list_style text-lg text-mainGray mb-2">
            تهدف سياسة الحضور في مركز مهارات متقدمة للتدريب إلى توضيح الإجراءات
            التنظيمية للحضور الإلكتروني المتزامن، حيث يشير الحضور الإلكتروني
            المتزامن إلى التواجد الافتراضي في الفصول الافتراضية والتأكد من وجود
            المتدرب في الوقت الفعلي للدرس، لذلك تم وضع سياسات وإجراءات تنظيمية
            للحضور الإلكتروني المتزامن وهي كالتالي:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              يتولى المدرب ومشرفة القاعة الافتراضية رصد دخول المتدربين
              والمتدربات وإثبات حضورهم أثناء المحاضرات.
            </li>
            <li>
              يتم تسجيل الحضور والغياب للمتدربين في جميع أيام البرنامج التدريبي.
            </li>
            <li>
              في ختام الدورة يُرسل تقرير الحضور الإلكتروني إلى إدارة مركز مهارات
              متقدمة للتدريب.
            </li>
            <li>
              على المتدرب حضور ما لا يقل عن (75%) من الساعات التدريبية المخصصة
              للدورة المسجّل فيها.
            </li>
            <li>
              الحضور الإلكتروني من خلال الفصول الافتراضية يُعتبر معادلاً للحضور
              الاعتيادي.
            </li>
            <li>
              يتم تقديم ساعات الحضور عن طريق الفصول الافتراضية المتزامنة بنسبة
              25% كحد أدنى من ساعات البرنامج/المقرر عند تقديم التدريب بالنمط
              الإلكتروني غير المتزامن وذلك في البرامج التي تزيد مدتها عن شهر.
            </li>
            <li>
              يتم تقديم ساعات الحضور عن طريق الفصول الافتراضية المتزامنة بنسبة
              25% كحد أدنى من ساعات البرنامج في حال التعليم المدمج (سواء حضور
              افتراضي أو اعتيادي) وذلك في البرامج التي تزيد مدتها عن شهر.
            </li>
            <li>التزام الجميع بالحضور وفق الخطة الزمنية للبرنامج التدريبي.</li>
            <p>
              في حال عدم التزام المتدرب بالحد الأدنى من نسبة "الحضور الإلكتروني"
              – الذي تم إقراره – سيؤدي ذلك إلى تطبيق الإجراءات التالية:
            </p>
            <p className="font-semibold text-lg my-1 text-mainBlack">
              عند الغياب بعذر:
            </p>
            <ul>
              <li>
                عند غياب المتدرب عن حضور الدورة يفقد حقه للحصول على الشهادة أو
                المطالبة باسترداد الرسوم ما لم يقدم عذر رسمي، ويحتفظ المركز بحق
                قبول العذر أو رفضه.
              </li>
            </ul>
            <p className="font-semibold text-lg my-1 text-mainBlack">
              عند الغياب بدون عذر:
            </p>
            <ul>
              <li>
                يؤدي عدم التزام المتدرب بالنسبة المقررة للحضور في الدورة
                الإلكترونية المتزامنة إلى حرمانه من الحصول على الشهادة ولا يحق
                له استرداد الرسوم.
              </li>
            </ul>

            <p>
              يحق للمركز التعديل على نظام تنفيذ الدورات بدون إشعار مسبق بما يحقق
              المصلحة العامة.
            </p>

            <p>يحق للمركز التعديل على سياسة الحضور بدون إشعار مسبق.</p>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            آلية قياس رضا المستفيدين (مدربين- متدربين) بنمط التدريب الإلكتروني
          </p>
          <p className="text-lg text-mainGray mb-2">
            يتم قياس مستوى رضا المستفيدين من خلال رابط إلكتروني يتم إرساله
            للمتدربين والمدربين نهاية كل دورة بهدف التعرف على رضا المتدربين عن
            البرامج التدريبية والمدربين والمقترحات التي يمكن أن تساهم في فعالية
            أداء الدورات المقدمة.
          </p>
          <ul className="list_style text-lg text-mainGray">
            <p className="font-semibold text-lg my-2 text-mainBlack">
              الهدف من قياس رضا المستفيدين:
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              يقوم مركز مهارات متقدمة للتدريب بتحسين ممارساته في تقديم البرامج
              الإلكترونية من خلال اتباع آلية واضحة لقياس مستوى رضا المستفيدين
              عنها.
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              الأداة المستخدمة في قياس مستوى رضا المستفيدين:
            </p>

            <li>
              يتم قياس رضا المستخدمين عن طريق ارسال استبيانات بعد الدورة
              التدريبية المقدمة.
            </li>
            <li>
              إرسال استبيانات للمدرب والمتدرب بعد قياس مدى الرضا عن المقررات
              يشمل بعض الأسئلة المتعلقة بآلية التدريب، ووسيلته وغيره.
            </li>
            <li>
              بناء على نتائج مستوى الرضا يتم اتخاذ القرارات بتحسين وتطوير
              الدورات التدريبية والخدمات المقدمة عبر الموقع الرئيسي والمنصة
              التدريبية.
            </li>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              الفئة المستهدفة(المستفيدين):
            </p>
            <p className="font-semibold text-lg my-2 text-mainBlack">
              المدربين والمتدربين
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              المحاور التي سيتم من خلالها قياس مستوى الرضا:
            </p>

            <li>
              الدعم الفني والتعليمي، وتأهيل المستفيدين على استخدام التقنية في
              بيئة التدريب الإلكتروني
            </li>
            <li>تجربة المستخدم في البرنامج الإلكتروني، تصميم البرنامج</li>
            <li>المدرب في بيئة التدريب الإلكتروني</li>
            <li>التفاعل والتغذية الراجعة</li>
            <li>القياس والتقويم</li>
            <li>الرضا العام</li>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              وقت القياس وآليته:
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              وضع استبيان يقيس رضا المستفيدين بعد الانتهاء من البرنامج التدريبي،
              بهدف تحسين وتطوير العملية التعليمية والتدريبية شخصيًا وعبر
              الإنترنت.
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              يتم الاستفادة من نتائج قياس مستوى الرضا في:
            </p>

            <li>توظيف النتائج في تطوير وتحسين الخطط التدريبية.</li>
            <li>الارتقاء بالعملية التدريبية والتعليمية.</li>
            <li>
              رفع الكفاءة وجودة الأداء بما يتوافق مع معايير الجودة ورضا
              المستفيدين.
            </li>
            <li>حل المشكلات والصعوبات التي تواجه المستفيدين.</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة الخصوصية
          </p>
          <p className="text-lg my-2 text-mainGray">
            إقرار بضمان خصوصية المستفيدين:
          </p>
          <p className="text-lg my-2 text-mainGray">
            يقر مركز مهارات متقدمة للتدريب
          </p>
          <p className="text-lg my-2 text-mainGray">
            على المحافظة على خصوصية وسرية المعلومات التي يستلمها من المستفيدين
            وتشمل جميع المعلومات المتعلقة بتقديم الخدمات بلا استثناء سواء كانت
            المعلومات الشخصية، أو المالية، أو التدريبية أو غيرها من أشكال
            المعلومات.
          </p>
          <p className=" text-lg my-2 text-mainBlack">
            الهدف من سياسة الخصوصية:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>سياسة الخصوصية</li>
            <li>
              تهدف سياسة الخصوصية إلى مساعدة جميع المستفيدين من خدمات مركز
              مهارات متقدمة للتدريب في فهم طبيعة البيانات التي تقوم الجهة بجمعها
              عند زيارة الموقع الإلكتروني أو المنصة التدريبية وكيفية التعامل مع
              هذه البيانات وحمايتها.
            </li>
            <li>
              كما تلتزم إدارة مركز مهارات متقدمة للتدريب بضمان خصوصية بيانات
              المستفيدين وحمايتها وضمان تخزينها وعدم الاطلاع عليها إلا من قبل
              المختصين وذوي الصلاحية وعدم نشرها ومشاركتها مع أي جهة أو أشخاص لا
              يحق لهم الاطلاع على هذه البيانات.
            </li>
            <li>البيانات التي نقوم بجمعها:</li>
            <li>(الاسم / رقم الجوال / الايميل / وغيرها)</li>
            <li>طريقة جمع البيانات، والغرض منها:</li>
            <li>
              لتتم عملية التسجيل بطريقة صحيحة ومن ثم إصدار الشهادات وتسجيل ساعات
              التطوير المهني.
            </li>
            <li>مدة تخزينها واحتفاظ الجهة بها:</li>
            <li>
              جميع البيانات مشفرة ومخزنة بشكل آمن ولا يحق لأحد الوصول إليها إلا
              من يمتلك الصلاحية بذلك.
            </li>
            <li>
              مسؤول التسجيل هو من يملك صلاحية الاطلاع على هذه البيانات بالإضافة
              إلى المسؤول التقني للموقع ولا يتم بيع هذه البيانات أو استعمالها
              لأغراض شخصية.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            آلية وأنظمة التحقق من هوية المستفيد
          </p>
          <p className="text-lg text-mainGray my-2">
            يقوم مركز مهارات متقدمة بالتأكد من هوية المستفيد عند كل مرة يتم فيها
            الدخول على المنصة التدريبية من خلال استخدام نظام التحقق التالي:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              عند تسجيل المشتركين يتم التسجيل بالموقع عبر نظام التحقق بخطوتين
              ويتم من خلال كود يصل للمتدرب عبر الرسائل القصيرة على رقمه الخاص أو
              كود عبر البريد الإلكتروني المسجل به، ويتم هذا التحقق في كل مرة
              يقوم المتدرب بتسجيل الدخول للموقع.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            دليل الكادر الاشرافي
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              يتوفر لدى مركز مهارات متقدمة للتدريب فريق إشرافي يعمل للإشراف على
              بيئة التدريب الإلكترونية.
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-3 text-mainBlack">
            الكادر الإشرافي وأدواره:
          </p>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-slate-500 rounded-2xl">
              <thead className="rounded-2xl">
                <tr className="text-sm font-normal">
                  <th className="border border-gray-400 p-2">م</th>
                  <th className="border border-gray-400 p-2">اسم الموظف</th>
                  <th className="border border-gray-400 p-2">وظيفته</th>
                  <th className="border border-gray-400 p-2">
                    دور ومسئوليات عضو الكادر الإشرافي للموقع
                  </th>
                  <th className="border border-gray-400 p-2">وسائل التواصل</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">1</td>
                  <td className="border border-gray-400 p-2">أ. آلاء يحيى</td>
                  <td className="border border-gray-400 p-2">مدير عام</td>
                  <td className="border border-gray-400 p-2">
                    مدير عام الإشراف العام ووضع السياسات التدريبية والاشراف على
                    عمليات تحديد الاحتياجات التدريبية للأفراد المستهدفة وتحليلها
                    والتأكد من أن الحقائب التدريبية مبنية وفقها وتلبي هذه
                    الاحتياجات الفعلية
                  </td>
                  <td className="border border-gray-400 p-2">
                    Alaajali33@gmail.com
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">2</td>
                  <td className="border border-gray-400 p-2">أ. طيف المالكي</td>
                  <td className="border border-gray-400 p-2">
                    مسؤول الدعم الفني
                  </td>
                  <td className="border border-gray-400 p-2">
                    متابعة وحل مشاكل المستفيدين/التنسيق مع المدربين والمتدربين.
                    والتواصل مع جميع الأطراف وتقديم الدعم المناسب
                  </td>
                  <td className="border border-gray-400 p-2">
                    Advance.skills3@gmail.com
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">3</td>
                  <td className="border border-gray-400 p-2">
                    أ. جواهر التركي
                  </td>
                  <td className="border border-gray-400 p-2">خدمة العملاء</td>
                  <td className="border border-gray-400 p-2">
                    عمل تقارير قياس الاثر التدريبي وتقارير قياس رضى المدرب
                    والمتدرب بالنتائج الكلية وتقديم التوصيات
                  </td>
                  <td className="border border-gray-400 p-2">
                    Advance.skills3@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-3 text-mainBlack">
            التزام الجهة بحصول المدربين على شهادات المركز الوطني للتعليم
            الإلكتروني الاحترافية
          </p>
          <p className="text-lg text-mainGray mb-2">
            يتعهد مركز مهارات متقدمة للتدريب بحصول المدربين على شهادات المركز
            الوطني للتعليم الإلكتروني المهنية الاحترافية بناء على الجدول الزمنى
            الموضح أدناه:
          </p>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-slate-500 rounded-2xl">
              <thead className="rounded-2xl">
                <tr className="text-sm font-normal">
                  <th className="border border-gray-400 p-2">
                    نسبة الحد الأدنى لعدد المستهدفين بالحصول على الشهادات
                    المهنية الاحترافية
                  </th>
                  <th className="border border-gray-400 p-2">
                    نوع الشهادات المهنية الاحترافية
                  </th>
                  <th className="border border-gray-400 p-2">
                    الفئة المستهدفة بالحصول على الشهادات المهنية الاحترافية
                  </th>
                  <th className="border border-gray-400 p-2">
                    بداية الالتزام بالخطة
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    تقديم التعليم والتدريب الإلكتروني OTT
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    تصميم خبرات التعليم الإلكتروني eLXD
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    المدربين ومن في حكمهم (يشمل فريق التصميم التعليمي ومطوري
                    المحتوى الإلكتروني سواء داخل الجهة أو خارجها)
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    2023
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">0%</td>
                  <td className="border-b border-gray-400 p-2">
                    تطوير المحتوى الإلكتروني eLCD
                  </td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">35%</td>
                  <td className="border-b border-gray-400 p-2">
                    تقديم التعليم والتدريب الإلكتروني OTT
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    تصميم خبرات التعليم الإلكتروني eLXD
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    المدربين ومن في حكمهم (يشمل فريق التصميم التعليمي ومطوري
                    المحتوى الإلكتروني سواء داخل الجهة أو خارجها)
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    2024
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    تطوير المحتوى الإلكتروني eLCD
                  </td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    تقديم التعليم والتدريب الإلكتروني OTT
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">75%</td>
                  <td className="border-b border-gray-400 p-2">
                    تصميم خبرات التعليم الإلكتروني eLXD
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    المدربين ومن في حكمهم (يشمل فريق التصميم التعليمي ومطوري
                    المحتوى الإلكتروني سواء داخل الجهة أو خارجها)
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    2025
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    تطوير المحتوى الإلكتروني eLCD
                  </td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة حقوق الملكية الفكرية وحقوق النشر
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              تعهد: نتعهد نحن مركز مهارات متقدمة للتدريب في الالتزام ونشر مبادئ
              حقوق الملكية الفكرية وحقوق النشر
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-3 text-mainBlack">
            التزام الجهة بحصول الكادر الإشرافي على شهادات المركز الوطني المهنية
            الاحترافية
          </p>
          <p className="text-lg text-mainGray mb-2">
            يتعهد مركز مهارات متقدمة للتدريب بالتزام الجهة بحصول الكادر الإشرافي
            على شهادات المركز الوطني للتعليم الإلكتروني المهنية الاحترافية بناء
            على الجدول الزمنى الموضح أدناه:
          </p>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-slate-500 rounded-2xl">
              <thead className="rounded-2xl">
                <tr className="text-sm font-normal">
                  <th className="border border-gray-400 p-2">
                    نسبة الحد الأدنى لعدد المستهدفين بالحصول على الشهادات
                    المهنية الاحترافية
                  </th>
                  <th className="border border-gray-400 p-2">
                    نوع الشهادات المهنية الاحترافية
                  </th>
                  <th className="border border-gray-400 p-2">
                    الفئة المستهدفة بالحصول على الشهادات المهنية الاحترافية
                  </th>
                  <th className="border border-gray-400 p-2">
                    بداية الالتزام بالخطة
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    ضبط جودة التعليم الإلكتروني eLQA
                  </td>
                  <td className="border-x border-x-gray-400 p-2">
                    الكادر الإشرافي على البيئة التدريبية
                  </td>
                  <td className="p-2">2023</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">0%</td>
                  <td className="border-b border-gray-400 p-2">
                    قيادة التعليم الإلكتروني eLL
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    ضبط جودة التعليم الإلكتروني eLQA
                  </td>
                  <td className="border-x border-x-gray-400 p-2">
                    الكادر الإشرافي على البيئة التدريبية
                  </td>
                  <td className="p-2">2024</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    قيادة التعليم الإلكتروني eLL
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">75%</td>
                  <td className="border-b border-gray-400 p-2">
                    ضبط جودة التعليم الإلكتروني eLQA
                  </td>
                  <td className="border-x border-x-gray-400 p-2">
                    الكادر الإشرافي على البيئة التدريبية
                  </td>
                  <td className="p-2">2025</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">75%</td>
                  <td className="border-b border-gray-400 p-2">
                    قيادة التعليم الإلكتروني eLL
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            الأدلة الإرشادية الإلكترونية للتقنيات المستخدمة في بيئات التدريب
            الإلكتروني للمتدربين
          </p>
          <p className="text-lg text-mainGray my-2">
            الدورات التدريبية والتأهيلية والأدلة الإرشادية الإلكترونية للبرامج
            المستخدمة في بيئات التدريب الإلكتروني للمتدربين:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              يتم ادراج الدورات حسب تواريخ مجدولة بإمكان المتدرب استعراض الدورات
              التطويرية عن طريق الموقع بكل سهولة.
            </li>
            <li>البرامج المستخدمة في بيئات التدريب الإلكتروني.</li>
            <li>
              تم تدريب المدربين على استخدام منصة tele in لتنفيذ الدورات
              التطويرية القصيرة (شهر فأقل) https://telein.net/profile
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            آلية رفع الشكاوى والمقترحات
          </p>
          <p className="text-lg text-mainGray">
            يتبع مركز مهارات متقدمة للتدريب الآلية التالية لرفع الشكاوى
            والمقترحات وطريقة التعامل معها:
          </p>
          <p className="text-lg text-mainGray">
            يتم تقديم الشكاوى والمقترحات من خلال وسائل التواصل التالية:
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              تعهد: نتعهد نحن مركز مهارات متقدمة للتدريب في الالتزام ونشر مبادئ
              حقوق الملكية الفكرية وحقوق النشر
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            سياسة حقوق الملكية الفكرية وحقوق النشر
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              يتم تقديم الشكوى من خلال القنوات المتاحة مع ضرورة ذكر البيانات
              المطلوبة وأرقام التواصل
            </li>
            <li> يتم تسجيل الشكوى وإحالتها إلى الادارة المعنية</li>
            <li>يقوم فريق مختص ببحث الشكوى من خلال التواصل مع مقدم الشكوى.</li>
            <li>
              يتم حل المشكلة واتخاذ الاجراءات اللازمة حال ثبوت صحة الشكوى بمقدم
              الشكوى وابلاغه بما تم لحل الشكوى
            </li>
            <li>تقوم الادارة بالاتصال هاتفياً.</li>
            <li>
              يتم إجراء مراجعة منتظمة لكافة الشكاوى وتحليلها ودراستها، وبيان فرص
              التحسين والتطوير المتصلة بها ومتابعتها مع وحدات العمل المعنية بتلك
              الفرص من قبل إدارة المر كز
            </li>
            <p className="text-lg text-mainBlack">
              الطريقة المتبعة في الجهة للتعامل مع الشكاوى والمقترحات:
            </p>
            <p className="text-lg text-mainGray">
              المستفيد دائما على حق حتى يثبت العكس
            </p>
            <li>
              يتم ضمان سرية معلومات المشتكي والجهة المقصودة بالشكوى وبيانات كل
              منهما من خلال عدم السماح بالاطلاع عليها إلا من قبل الموظفين
              المختصين والمخولين الذين تقتضي طبيعة عملهم ذلك الاطلاع.
            </li>
            <li>
              يتخذ الأفراد المعنيين كافة التدابير والاحتياطات اللازمة لضمان سرية
              الشكاوى المقدمة، وكذلك سرية الوثائق والمعلومات المتعلقة بها
              وبتفاصيل المشتكي (الورقية والإلكترونية الصوتية المسجلة).
            </li>
            <li>
              أي شكوى تعبر عن رأي المتعامل و للمركز حق قبول أو رفض الشكوى إذا
              كانت غير واضحة أو لا يمكن دراستها نسبة لعدم الحصول على رد المشتكي
              في الفترة المحددة؛ وأيضاً لا تقبل الشكاوى الكيدية.
            </li>
            <p className="text-lg text-mainBlack">مدة إغلاق الشكاوى:</p>
            <li> إذا كان الشأن داخلي يكون الإجراء مباشرة عند تلقي الشكوى.</li>
            <li>
              في حال ارتباط الشكوى بمنشأة خارجية يكون خلال أسبوع أو ثلاث أيام
              عمل.
            </li>
            <p className="text-lg text-mainBlack">
              في حال عدم حل الشكوى خلال المدة المحددة يتم تشكيل لجنة والنظر
              بالأسباب ورفع ايميل بالنتائج المتوصل إليها والأسباب. قنوات تقديم
              الشكاوى :
            </p>
            <p className="text-lg text-mainGray">
              ويسرنا استقبال أي من الشكاوى أو الاستفسارات أو الملاحظات عبر:
            </p>
            <li>نموذج الشكاوى المرفق</li>
            <Link to="/callUs" className="text-lg text-blue-800 underline">
              اضغط هنا
            </Link>
            <li> رقم الشكاوى(اتصال و واتس اب) :0534699908</li>
            <li>الإيميل: advance.skills3@gmail.com</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            الخطة التدريبية للمدربين على المحاور الثلاثة (استخدام التقنية، تطوير
            المحتوى الإلكتروني، مهارات التدريس الإلكتروني)
          </p>
          <p className="text-lg text-mainGray">
            يتم تدريب المدربين ولمدة (15 ساعات تدريبية) على اكتساب المفاهيم
            الأساسية المتعلقة بالتقنية والتعرف على تطبيقاتها في التعليم حيث
            يتوقع من المدرب في نهاية التدريب أن يكون قادراً على
          </p>
          <ul className="list_style text-lg text-mainGray">
            <p className="font-semibold text-xl my-2 text-mainBlack">
              استخدام التقنية
            </p>
            <li>التخطيط والتصميم الفعال للتعليم المدعوم بالتقنية.</li>
            <li>استخدام التقنية في تيسير عملية التقويم</li>
            <li> استخدام التقنية لتطوير أدائه وممارسته المهنية</li>
            <li>
              {" "}
              الدخول الى المنصة واستخدام النظم الوسيطة المستخدمة بالعملية
              التعليمية
            </li>
            <li>
              التأكد من امتلاك الأدوات اللازمة لإيصال التدريب الالكتروني بكل
              كفاءة.
            </li>
            <li>
              {" "}
              المقدرة على التعامل مع المادة العلمية تقنيا وأنظمة الحضور وأنظمة
              الاختبارات
            </li>
            <li>لاستخدام الآمن لمصادر التقنية</li>

            <p className="font-semibold text-xl my-2 text-mainBlack">
              تطوير المحتوى الالكتروني
            </p>
            <li>
              يتم تدريب المدربين ولمدة (15 ساعة تدريبية) على تصميم وتطوير
              المحتوى الالكتروني باستخدام الكمبيوتر وتطبيقاته المختلفة، ومن ثم
              نشره وعرضه للطلاب وإمكانية الاختيار من بين بدائل متعددة لمصادر
              التعلم والوسائط التفاعلية حسب احتياجات كل طالب.
            </li>
            <li>
              سواء أكان ذلك بصورة متزامنة (Synchronous) أو غير متزامنة
              (Asynchronous) واستخدام أنظمة إدارة التعلم، وأنظمة إدارة المحتوى
              التعليمي.
            </li>

            <p className="font-semibold text-xl my-2 text-mainBlack">
              مهارات التدريس
            </p>

            <p className="text-lg text-mainGray">
              المدربين لدينا يحصلون على تدريب لاكتساب مهارات التدريس على المراحل
              التالية:
            </p>
            <p className="text-lg text-mainBlack">مرحلة التقنية : وتشمل</p>
            <li>اتقان المهارات الأساسية للحاسب</li>
            <li>استخدام أنظمة إدارة التعلم، وأنظمة إدارة المحتوى التعليمي</li>
            <li>
              {" "}
              استخدام منصات الوسائط الاجتماعية عبر الإنترنت في البيئات
              الأكاديمية
            </li>
            <p className="text-lg text-mainBlack">مرحلة التصميم : وتشمل</p>
            <li>وضع وصف متكامل للمادة</li>
            <li> اتقان مهارة تصميم المحتوى التعليمي الالكتروني</li>
            <li> اتقان المادة واستخدام أدوات التعلم الالكترونية المناسبة</li>
            <li>
              اتقان مهارة تنويع أساليب التدريس وتشجيع العمل ضمن الفريق والبحث عن
              الإجابات
            </li>
            <li>أن يصمم المادة وفقا لمتطلبات الجهة المشرفة.</li>
            <li>
              تحديث المحتوى التعليمي الالكتروني مع الأخذ بعين الاعتبار الفروقات
              الفردية بين الطلاب.
            </li>
            <p className="text-lg text-mainBlack">
              مرحلة النظام الإداري : وتشمل
            </p>
            <li>الحرص على متابعة الحضور الالكتروني</li>
            <li>ضمان تفاعل الطلاب من خلال اشراكهم بالعملية التعليمية</li>
            <li> متابعة الطلبة وانجازهم وتطور فهمهم للمادة</li>
            <li>التقييم المستمر والعادل.</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            التزامات المركز
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>نتعهد بعدم تجاوز العدد المسموح به للمتدربين.</li>
            <li>
              نتعهد بالتأكد من حداثة المحتوى الإلكتروني المقدم في البرامج، وعدم
              مخالفة القوانين والسياسات الوطنية.
            </li>
            <li>
              نتعهد بالالتزام ونشر مبادئ حقوق الملكية الفكرية وحقوق النشر.
            </li>
            <li>
              نتعهد بضمان خصوصية المستفيدين مع وجود سياسات وإجراءات واضحة
              للخصوصية.
            </li>
            <li>
              نتعهد باستخدام أنظمة تعليم إلكتروني تدعم مختلف أنواع الأجهزة
              باختلاف أنظمتها ومتوافقة مع جميع الأجهزة بما فيها الأجهزة اللوحية
              والهواتف الذكية.
            </li>
            <li>
              نتعهد بتقديم المساعدة الفنية والتعليمية للمدربين والمتدربين طوال
              مدة تنفيذ التدريب.
            </li>
            <li>
              نتعهد بعدم تجاوز العدد المسموح به للمتدربين في الفصول الافتراضية
              المتزامنة.
            </li>
            <li>
              نتعهد ونقر بتوفير نظام بنية تقنية تتحمل الأنظمة وأعداد المستفيدين
              والمحتوى بجميع أنواعه بدون انقطاع.
            </li>
            <li>
              نلتزم بتوفير خدمة التنبيهات في أنظمة إدارة التعلم لتنبيه المتدربين
              بالمتطلبات بشكل مستمر لتحسين استمرارية التدريب ومتابعة المهمات
              والواجبات داخل البرنامج التدريبي التي تزيد مدتها عن شهر.
            </li>
            <li>نلتزم بتوفير خاصية البحث عن المحتوى الرقمي في النظام.</li>
            <li>
              نلتزم بتوفير الدورات التدريبية الصحية والأدلة الإرشادية
              الإلكترونية للبرامج المستخدمة في بيئات التدريب الإلكتروني
              للمتدربين.
            </li>
            <li>
              نلتزم بحصول المدربين على الشهادات الاحترافية في مجالات التعليم
              الإلكتروني.
            </li>
            <li>
              نلتزم بحصول الفنيين والإداريين والتقنيين على الشهادات الاحترافية
              في مجال التعليم الإلكتروني.
            </li>
            <li>
              نلتزم بحصول الكادر الإشرافي على الشهادات الاحترافية في مجال
              التعليم الإلكتروني.
            </li>
          </ul>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default PublicPolicies;
