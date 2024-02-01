import React from "react";
import PoliciesImg from "../assets/landingHome.png";
import LandingPages from "../components/landing/landingPages";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { t } from "i18next";
import { useIsRTL } from "../hooks/useIsRTL";

const PublicPolicies = () => {
  const isRTL = useIsRTL();

  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={PoliciesImg}
          title={t("Public policies")}
          main={t("Main")}
          branch={t("Public policies")}
        />
      </div>

      <div className="container my-20">
        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Integrity Policy")}
          </p>
          <p className="text-mainBlack text-lg my-2">
            {t(
              "Integrity policies and laws and the importance of adhering to them:"
            )}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "Integrity is a basic requirement in all dealings within the entity, which emphasizes the importance of honesty and honesty for every individual in the electronic training environment, including trainers, trainees, and administrators."
              )}
            </li>
            <li>
              {t(
                "From the standpoint of preserving the scientific and professional moral values that our true religion urges us to, the Advanced Skills Training Center always works to enhance them in its training environment through constant emphasis on commitment to the highest standards of integrity, whether on the part of trainers, center workers or trainees, as the Advanced Skills Training Center assumes responsibility Creating an environment in which high levels of integrity are available by establishing standards and controls for the training process that work to achieve integrity in all stages of the training process, starting with the registration of trainees in training programs, during training, or in the testing and results phase, as our center believes that enhancing integrity represents an essential part of growth. The trainee’s personal and intellectual experience, and that increasing the trainee’s, trainers’ and employees’ awareness of issues related to integrity by promoting a climate in which the spirit of trust, honesty and high ethical standards prevail contributes a major role to the progress and prosperity of society by graduating cadres capable of bearing responsibility for the progress and elevation of the nation due to their moral values. The high."
              )}
            </li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Forms of integrity violation:")}
          </p>
          <ul className="list_style text-mainBlack text-lg">
            <li>
              {t(
                "Cheating: This is the transfer of the work of others and the unauthorized use of any information and training materials in academic tests or other tasks assigned to trainees."
              )}
            </li>
            <li>
              {t(
                "Plagiarism and intellectual theft: which is using the work of others as if it were one's own work, without mentioning the original author."
              )}
            </li>
            <li>
              {t(
                "Exploiting cooperation: The trainee relying on another trainee within his group to accomplish a joint task or work, or exploiting another trainee to accomplish individual duties"
              )}
            </li>
            <li>{t("Fabrication and forgery:")}</li>
            <ul
              className={`${
                isRTL ? "list-[arabic-indic]" : "list-decimal"
              } flex flex-col gap-1`}
            >
              <li>
                {t(
                  "The trainee changes or fabricates the information available to him in a test or assignment, or brings a forged medical certificate in order to be absent from attendance."
                )}
              </li>
              <li>
                {t(
                  "The trainee receives any assistance in the tests, provides information to another trainee, or brings external papers to the test and obtains information that was not provided by the test preparer."
                )}
              </li>
              <li>
                {t(
                  "Obtaining or providing unauthorized assistance in examinations, or fabricating information to support laboratory results or other actions."
                )}
              </li>
            </ul>
            <li>
              {t(
                "Impersonating others: The trainee pretending to be someone else in class, in a test or exam, or in any type of academic assignment. In this case, the trainee who impersonates another person and the trainee who motivates the impersonation will be punished"
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t(
              "In the event of impersonation or fraud, the Disciplinary Committee has the right, after verifying the violations referred to it, to impose one or more of the following penalties:"
            )}
          </p>
          <p className="text-mainGray text-lg mb-2">
            {t(
              "In the event of impersonation or fraud, the Disciplinary Committee has the right, after verifying the violations referred to it, to impose one or more of the following penalties:"
            )}
          </p>
          <ul className="list_style text-mainGray text-lg">
            <li>
              {t(
                "Warning verbally and documenting this with a written pledge or warning in writing."
              )}
            </li>
            <li>
              {t(
                "Temporary suspension of the account and deprivation of enjoying the platform’s services."
              )}
            </li>
            <li>{t("Canceling the course test in cases of cheating")}</li>
            <li>{t("The amount paid for the course will not be refunded")}</li>
            <li>{t("Depriving the trainee of receiving his certificate")}</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Intellectual property rights and copyright policy")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "Pledge: We, the Advanced Skills Center for Training, pledge to adhere to and disseminate the principles of intellectual property rights and copyrights"
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t(
              "Intellectual property rights and copyrights in the electronic training environment:"
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "Intellectual property rights are a group of legal rights that protect the works of authors and creators from being reproduced and exploited by others without their consent."
              )}
            </li>
            <li>
              {t(
                "Intellectual property rights are a group of legal rights that protect the works of authors and creators from being reproduced and exploited by others without their consent."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t(
              "Principles of intellectual property rights in the Advanced Skills Training Center:"
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "The entity is committed to intellectual property and copyright rights in what is published on the training platform."
              )}
            </li>
            <li>
              {t(
                "Trainers and their equivalents are bound by copyright when developing content."
              )}
            </li>
            <li>{t("If open content is used, the source is mentioned.")}</li>
            <li>
              {t(
                "The entity is committed to examining the content of all courses or programs and the work of trainees and ensuring that they are free of intellectual property violations."
              )}
            </li>
            <li>
              {t(
                "Advanced Skills Training Center’s policy regarding allowing content to be published:"
              )}
            </li>
            <ul
              className={`${
                isRTL ? "list-[arabic-indic]" : "list-decimal"
              } flex flex-col gap-1`}
            >
              <li>
                {t(
                  "It is prohibited to publish any content that exposes people or organizations or shows them in a bad manner."
                )}
              </li>
              <li>
                {t(
                  "It is prohibited to infringe by publishing or quoting intellectually copyrighted content without permission or approval."
                )}
              </li>
              <li>
                {t(
                  "It is prohibited to publish any content that violates religious or moral teachings."
                )}
              </li>
              <li>
                {t(
                  "It is prohibited to publish any content that affects national unity (racist, sectarian, tribal...)."
                )}
              </li>
              <li>
                {t(
                  "It is prohibited to publish or promote any content or product for commercial purposes."
                )}
              </li>
            </ul>
            <li>
              {t(
                "In the event of a violation of intellectual property rights, the Disciplinary Committee has the right, after verifying the violations referred to it, to impose one or more of the following penalties:"
              )}
            </li>
            <ul
              className={`${
                isRTL ? "list-[arabic-indic]" : "list-decimal"
              } flex flex-col gap-1`}
            >
              <li>
                {t(
                  "Warning verbally and documenting this with a written pledge or warning in writing."
                )}
              </li>
              <li>
                {t(
                  "Temporary suspension of the account and deprivation of enjoying the platform’s services."
                )}
              </li>
            </ul>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Intellectual property rights and copyright policy")}
          </p>
          <p className="list_style text-lg text-mainGray mb-2">
            {t(
              "The attendance policy at the Advanced Skills Training Center aims to clarify the organizational procedures for synchronous electronic attendance, as synchronous electronic attendance refers to virtual presence in virtual classes and ensuring the trainee’s presence in real time for the lesson. Therefore, organizational policies and procedures have been developed for synchronous electronic attendance, which are as follows:"
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "The trainer and the virtual hall supervisor monitor the entry of the male and female trainees and confirm their attendance during the lectures."
              )}
            </li>
            <li>
              {t(
                "Attendance and absence of trainees are recorded on all days of the training program."
              )}
            </li>
            <li>
              {t(
                "At the conclusion of the course, the electronic attendance report is sent to the management of the Advanced Skills Training Center."
              )}
            </li>
            <li>
              {t(
                "The trainee must attend no less than (75%) of the training hours allocated for the course in which he is registered."
              )}
            </li>
            <li>
              {t(
                "Electronic attendance through virtual classes is considered equivalent to regular attendance."
              )}
            </li>
            <li>
              {t(
                "Attendance hours are provided through synchronous virtual classes at a minimum of 25% of the program/course hours when training is provided in the asynchronous electronic mode in programs whose duration exceeds one month."
              )}
            </li>
            <li>
              {t(
                "Attendance hours are provided through synchronous virtual classes at a minimum of 25% of the program hours in the case of blended learning (whether virtual or regular attendance) in programs whose duration exceeds a month."
              )}
            </li>
            <li>
              {t(
                "Everyone's commitment to attend according to the training program's time plan."
              )}
            </li>
            <p>
              {t(
                "In the event that the trainee does not adhere to the minimum percentage of “electronic attendance” - which has been approved - this will lead to the application of the following procedures:"
              )}
            </p>
            <p className="font-semibold text-lg my-1 text-mainBlack">
              {t("When absent with an excuse:")}
            </p>
            <ul>
              <li>
                {t(
                  "If the trainee is absent from attending the course, he loses his right to obtain the certificate or... Demanding a refund of fees unless an official excuse is provided, and the Center reserves the right Accept or reject the excuse."
                )}
              </li>
            </ul>
            <p className="font-semibold text-lg my-1 text-mainBlack">
              {t("When absent with an excuse:")}
            </p>
            <ul>
              <li>
                {t(
                  "Failure of the trainee to adhere to the prescribed percentage of attendance in the synchronous electronic course will result in him being denied the certificate and he is not entitled to a refund of the fees."
                )}
              </li>
            </ul>

            <p>
              {t(
                "The Center has the right to amend the course implementation system without prior notice to achieve its goals Public interest."
              )}
            </p>

            <p>
              {t(
                "The center has the right to amend the attendance policy without prior notice."
              )}
            </p>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t(
              "Mechanism for measuring beneficiary satisfaction (trainers - trainees) using electronic training"
            )}
          </p>
          <p className="text-lg text-mainGray mb-2">
            {t(
              "Beneficiaries' satisfaction level is measured through an electronic link that is sent For trainees and trainers at the end of each course, with the aim of identifying the trainees’ satisfaction with... Training programs, trainers and proposals that can contribute to effectiveness Performance of the courses offered."
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t("The goal of measuring beneficiary satisfaction:")}
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t(
                "The Advanced Skills Training Center improves its practices in providing electronic programs by following a clear mechanism to measure the level of beneficiaries’ satisfaction with them."
              )}
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t(
                "The tool used to measure the level of beneficiary satisfaction:"
              )}
            </p>

            <li>
              {t(
                "User satisfaction is measured by sending questionnaires after the training course provided."
              )}
            </li>
            <li>
              {t(
                "Sending questionnaires to the trainer and trainee after measuring satisfaction with the courses includes some questions related to the training mechanism, method, etc."
              )}
            </li>
            <li>
              {t(
                "Based on the results of the level of satisfaction, decisions are made to improve and develop the training courses and services provided through the main website and the training platform."
              )}
            </li>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t("Target group (beneficiaries):")}
            </p>
            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t("Trainers and trainees")}
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t(
                "The axes through which the level of satisfaction will be measured:"
              )}
            </p>

            <li>
              {t(
                "Technical and educational support, and qualifying beneficiaries to use technology in the electronic training environment"
              )}
            </li>
            <li>{t("Trainer in an electronic training environment")}</li>
            <li>
              {t("User experience in the electronic program, program design")}
            </li>
            <li>{t("Interaction and feedback")}</li>
            <li>{t("Measurement and evaluation")}</li>
            <li>{t("Overall satisfaction")}</li>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t("Measurement time and mechanism:")}
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t(
                "Developing a questionnaire that measures beneficiaries’ satisfaction after completing the training program, with the aim of improving and developing the educational and training process in person and online."
              )}
            </p>

            <p className="font-semibold text-lg my-2 text-mainBlack">
              {t(
                "The results of measuring the level of satisfaction are used to:"
              )}
            </p>

            <li>
              {t("Using the results to develop and improve training plans.")}
            </li>
            <li>{t("Improving the training and educational process.")}</li>
            <li>
              {t(
                "Raising efficiency and quality of performance in accordance with quality standards and beneficiary satisfaction."
              )}
            </li>
            <li>
              {t("Solve problems and difficulties facing beneficiaries.")}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("privacy policy")}
          </p>
          <p className="text-lg my-2 text-mainGray">
            {t("Acknowledgment of ensuring the privacy of beneficiaries:")}
          </p>
          <p className="text-lg my-2 text-mainGray">
            {t("Accredits the Advanced Skills Training Center")}
          </p>
          <p className="text-lg my-2 text-mainGray">
            {t(
              "He must maintain the privacy and confidentiality of the information he receives from beneficiaries, which includes all information related to the provision of services without exception, whether personal, financial, training, or other forms of information."
            )}
          </p>
          <p className=" text-lg my-2 text-mainBlack">
            {t("Objective of the privacy policy:")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>{t("privacy policy")}</li>
            <li>
              {t(
                "The privacy policy aims to help all beneficiaries of the Advanced Skills Training Center’s services in understanding the nature of the data that the entity collects when visiting the website or training platform and how to deal with and protect this data."
              )}
            </li>
            <li>
              {t(
                "The management of the Advanced Skills Training Center is also committed to ensuring the privacy and protection of beneficiary data, ensuring that it is stored and not viewed except by specialists and those with authority, and not publishing and sharing it with any entity or persons who do not have the right to access this data."
              )}
            </li>
            <li>{t("Data we collect:")}</li>
            <li>{t("(Name / mobile number / email / etc.)")}</li>
            <li>{t("Data collection method and purpose:")}</li>
            <li>
              {t(
                "To complete the registration process correctly and then issue certificates and record professional development hours."
              )}
            </li>
            <li>{t("Duration of its storage and retention by the entity:")}</li>
            <li>
              {t(
                "All data is encrypted and stored securely, and no one has the right to access it except those who have the authority to do so."
              )}
            </li>
            <li>
              {t(
                "The registration official is the one who has the authority to view this data, in addition to the technical administrator of the site, and this data is not sold or used for personal purposes."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t(
              "Mechanism and systems for verifying the identity of the beneficiary"
            )}
          </p>
          <p className="text-lg text-mainGray my-2">
            {t(
              "The Advanced Skills Center verifies the beneficiary’s identity every time he accesses the training platform by using the following verification system:"
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "When participants register, they register on the site through a two-step verification system, which is done through a code that reaches the trainee via SMS on his private number or a code via the email registered with him. This verification is done every time the trainee logs in to the site."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Supervisory staff guide")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "The Advanced Skills Training Center has a supervisory team working to supervise the electronic training environment."
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-3 text-mainBlack">
            {t("The supervisory staff and its roles:")}
          </p>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-slate-500 rounded-2xl">
              <thead className="rounded-2xl">
                <tr className="text-sm font-normal">
                  <th className="border border-gray-400 p-2">{t("M")}</th>
                  <th className="border border-gray-400 p-2">
                    {t("Employee Name")}
                  </th>
                  <th className="border border-gray-400 p-2">{t("His job")}</th>
                  <th className="border border-gray-400 p-2">
                    {t(
                      "The role and responsibilities of the site supervisory staff member"
                    )}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t("Social media")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">1</td>
                  <td className="border border-gray-400 p-2">
                    {t("a. Alaa Yahya")}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {t("Director general")}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {t(
                      "Director General of general supervision, developing training policies, supervising the processes of identifying and analyzing the training needs of targeted individuals, and ensuring that the training packages are built according to them and meet these actual needs."
                    )}
                  </td>
                  <td className="border border-gray-400 p-2">
                    Alaajali33@gmail.com
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">2</td>
                  <td className="border border-gray-400 p-2">
                    {t("a. Maliki spectrum")}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {t("Technical support officer")}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {t(
                      "Follow up and solve beneficiaries’ problems/coordinate with trainers and trainees. Communicate with all parties and provide appropriate support"
                    )}
                  </td>
                  <td className="border border-gray-400 p-2">
                    Advance.skills3@gmail.com
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">3</td>
                  <td className="border border-gray-400 p-2">
                    {t("a. Turkish Jewels")}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {t("customers service")}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {t(
                      "Preparing reports measuring the training impact and reports measuring the trainer and trainee’s satisfaction with the overall results and providing recommendations"
                    )}
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
            {t(
              "The entity is committed to ensuring that trainers obtain professional certificates from the National Center for E-Learning"
            )}
          </p>
          <p className="text-lg text-mainGray mb-2">
            {t(
              "The Advanced Skills Training Center pledges that the trainers will obtain the National Center for E-Learning’s professional certificates based on the timetable shown below."
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-slate-500 rounded-2xl">
              <thead className="rounded-2xl">
                <tr className="text-sm font-normal">
                  <th className="border border-gray-400 p-2">
                    {t(
                      "The minimum percentage of those targeted to obtain professional certificates"
                    )}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t("Start committing to the plan")}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t(
                      "The target group for obtaining professional certificates"
                    )}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t("Type of professional certificates")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("Providing OTT e-education and training")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("Designing e-learning experiences eLXD")}
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    {t(
                      "Trainers and the like (including the educational design team and electronic content developers, whether inside or outside the entity)"
                    )}
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    2023
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">0%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLCD electronic content development")}
                  </td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">35%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("Providing OTT e-education and training")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("Designing e-learning experiences eLXD")}
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    {t(
                      "Trainers and the like (including the educational design team and electronic content developers, whether inside or outside the entity)"
                    )}
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    2024
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLCD electronic content development")}
                  </td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("Providing OTT e-education and training")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">75%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("Designing e-learning experiences eLXD")}
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    {t(
                      "Trainers and the like (including the educational design team and electronic content developers, whether inside or outside the entity)"
                    )}
                  </td>
                  <td className="border border-x-gray-400 border-y-transparent p-2">
                    2025
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLCD electronic content development")}
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
            {t("Intellectual property rights and copyright policy")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "Pledge: We, the Advanced Skills Center for Training, pledge to adhere to and disseminate the principles of intellectual property rights and copyrights"
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-3 text-mainBlack">
            {t(
              "The entity’s commitment to ensure that the supervisory staff obtains the National Professional Center’s professional certificates"
            )}
          </p>
          <p className="text-lg text-mainGray mb-2">
            {t(
              "The Advanced Skills Training Center pledges the entity’s commitment to ensuring that the supervisory staff obtains the National Center for E-Learning’s professional certificates based on the timetable shown below:"
            )}
          </p>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-slate-500 rounded-2xl">
              <thead className="rounded-2xl">
                <tr className="text-sm font-normal">
                  <th className="border border-gray-400 p-2">
                    {t(
                      "The minimum percentage of those targeted to obtain professional certificates"
                    )}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t("Type of professional certificates")}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t(
                      "The target group for obtaining professional certificates"
                    )}
                  </th>
                  <th className="border border-gray-400 p-2">
                    {t("Start committing to the plan")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLQA quality control")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2">
                    {t("Supervisory staff of the training environment")}
                  </td>
                  <td className="p-2">2023</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">0%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLL Leadership")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">50%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLQA quality control")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2">
                    {t("Supervisory staff of the training environment")}
                  </td>
                  <td className="p-2">2024</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">25%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLL Leadership")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2"></td>
                  <td className="p-2"></td>
                </tr>

                <tr className="text-center">
                  <td className="border border-gray-400 p-2">75%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLQA quality control")}
                  </td>
                  <td className="border-x border-x-gray-400 p-2">
                    {t("Supervisory staff of the training environment")}
                  </td>
                  <td className="p-2">2025</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-400 p-2">75%</td>
                  <td className="border-b border-gray-400 p-2">
                    {t("eLL Leadership")}
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
            {t(
              "Electronic guides for the technologies used in electronic training environments for trainees"
            )}
          </p>
          <p className="text-lg text-mainGray my-2">
            {t(
              "Training and qualification courses and electronic manuals for programs used in electronic training environments for trainees:"
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "Courses are listed according to scheduled dates. The trainee can easily review the development courses through the website."
              )}
            </li>
            <li>{t("Programs used in electronic training environments.")}</li>
            <li>
              {t(
                "Trainers were trained to use the tele in platform to implement short development courses (one month or less) https://telein.net/profile"
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Mechanism for submitting complaints and suggestions")}
          </p>
          <p className="text-lg text-mainGray">
            {t(
              "The Advanced Skills Training Center follows the following mechanism for submitting complaints and suggestions and how to deal with them:"
            )}
          </p>
          <p className="text-lg text-mainGray">
            {t(
              "Complaints and suggestions are submitted through the following means of communication:"
            )}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
              {t(
                "Pledge: We, the Advanced Skills Center for Training, pledge to adhere to and disseminate the principles of intellectual property rights and copyrights"
              )}
            </li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Intellectual property rights and copyright policy")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>
{t("The complaint must be submitted through the available channels, provided that the required data and contact numbers must be mentioned")}
            </li>
            <li> {t("The complaint is registered and referred to the concerned department")}</li>
            <li>{t("A specialized team examines the complaint by communicating with the complainant")}</li>
            <li>
              {t("The problem will be solved and the necessary measures will be taken if the complainant’s complaint is proven valid and he is informed of what has been done to resolve the complaint")}
            </li>
            <li>{t("The administration makes a phone call.")}</li>
            <li>
{t("All complaints are regularly reviewed, analyzed and studied, and opportunities for improvement and development related to them are identified and followed up with the work units concerned with those opportunities by the center’s management.")}
            </li>
            <p className="text-lg text-mainBlack">
              {t("The method used by the entity to deal with complaints and suggestions:")}
            </p>
            <p className="text-lg text-mainGray">
            {t("The confidentiality of the information of the complainant and the intended party of the complaint and their respective data is guaranteed by not allowing access to them except by specialized and authorized employees whose work nature requires such access.")}
          </p>
            <p className="text-lg text-mainGray">
              {t("The beneficiary is always right until proven otherwise")}
            </p>
            <li>
              {t("The confidentiality of the information of the complainant and the intended party of the complaint and their respective data is guaranteed by not allowing access to them except by specialized and authorized employees whose work nature requires such access.")}
            </li>
            <li>
              {t("The concerned individuals take all necessary measures and precautions to ensure the confidentiality of complaints submitted, as well as the confidentiality of documents and information related to them and to the complainant’s details (paper, electronic, and recorded audio).")}
            </li>
            <li>
              {t("Any complaint that expresses the customer’s opinion, and the center has the right to accept or reject the complaint if it is unclear or cannot be studied due to the failure to obtain a response from the complainant within the specified period. Also, malicious complaints are not accepted.")}
            </li>
            <p className="text-lg text-mainBlack">{t("Duration for closing complaints")}</p>
            <li> {t("If the matter is internal, the procedure will take place immediately upon receiving the complaint.")}</li>
            <li>
            </li>
            <p className="text-lg text-mainBlack">
            {t("If the complaint is related to an external facility, it will be submitted within one week or three working days. If the complaint is not resolved within the specified period, a committee will be formed, examine the reasons, and send an email with the results reached and the reasons. Complaints channels:")}

            </p>
            <p className="text-lg text-mainGray">
              {t("We are pleased to receive any complaints, inquiries or comments via:")}
            </p>
            <li>{t("Attached complaints form")}</li>
            <Link to="/callUs" className="text-lg text-blue-800 underline">
              {t("Press here")}
            </Link>
            <li>{t("Complaints number (call and WhatsApp): 0534699908")}</li>
            <li>{t("Email: advance.skills3@gmail.com")}</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
                {t("Training plan for trainers on the three axes (use of technology, development of electronic content, and skills of electronic teaching)")}
          </p>
          <p className="text-lg text-mainGray">
                {t("The trainers are trained for a period of (15 training hours) to acquire the basic concepts related to the technology and learn about its applications in education. At the end of the training, the trainer is expected to be able to")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <p className="font-semibold text-xl my-2 text-mainBlack">
              {t("Use of technology")}
            </p>
            <li>{t("Effective planning and design for technology-enabled learning.")}</li>
            <li>{t("Using technology to facilitate the evaluation process")}</li>
            <li>{t("Using technology to develop his performance and professional practice")}</li>
            <li>
                {t("Accessing the platform and using the intermediary systems used in the educational process")}
            </li>
            <li>
              {t("Ensure that you have the necessary tools to deliver electronic training efficiently.")}
            </li>
            <li>
              {t("The ability to deal with scientific material technically, attendance systems, and examination systems")}
            </li>
            <li>{t("For safe use of technical resources")}</li>

            <p className="font-semibold text-xl my-2 text-mainBlack">
              {t("Electronic content development")}
            </p>
            <li>
            {t("Trainers are trained for a period of (15 training hours) on designing and developing electronic content using the computer and its various applications, then publishing and displaying it to students and the ability to choose from multiple alternatives for learning resources and interactive media according to the needs of each student.")}
            </li>
            <li>
              {t("Whether it is synchronous or asynchronous, the use of learning management systems and educational content management systems.")}
            </li>

            <p className="font-semibold text-xl my-2 text-mainBlack">
              {t("Teaching skills")}
            </p>

            <p className="text-lg text-mainGray">
             {t("Our trainers receive training to acquire teaching skills in the following stages:")}
            </p>
            <p className="text-lg text-mainBlack">{t("Technical stage: includes")}</p>
            <li>{t("Mastering basic computer skills")}</li>
            <li>{t("Using learning management systems and educational content management systems")}</li>
            <li>
                {t("Using online social media platforms in academic settings")}
            </li>
            <p className="text-lg text-mainBlack">{t("Design phase: includes")}</p>
            <li>{t("Develop a comprehensive description of the material")}</li>
            <li> {t("Mastering the skill of designing electronic educational content")}</li>
            <li> {t("Mastering the material and using appropriate e-learning tools")}</li>
            <li>
              {t("Mastering the skill of diversifying teaching methods, encouraging team work, and searching for answers")}
            </li>
            <li>{t("The material should be designed in accordance with the requirements of the supervising authority.")}</li>
            <li>
              {t("Updating electronic educational content, taking into account individual differences among students.")}
            </li>
            <p className="text-lg text-mainBlack">
             {t("Administrative system stage: includes")}
            </p>
            <li>{t("Make sure to follow up on electronic attendance")}</li>
            <li>{t("Ensuring student interaction by involving them in the educational process")}</li>
            <li> {t("Following up on students’ achievement and the development of their understanding of the subject")}</li>
            <li>{t("Continuous and fair evaluation.")}</li>
          </ul>
        </div>

        <div className="mt-6" data-aos="fade-up">
          <p className="font-semibold text-xl my-2 text-mainBlack">
            {t("Centre's obligations")}
          </p>
          <ul className="list_style text-lg text-mainGray">
            <li>{t("We pledge not to exceed the permitted number of trainees.")}</li>
            <li>
              {t("We pledge to ensure that the electronic content presented in the programs is up to date and does not violate national laws and policies.")}
            </li>
            <li>
              {t("We pledge to adhere to and disseminate the principles of intellectual property rights and copyrights.")}
            </li>
            <li>
              {t("We pledge to ensure the privacy of our beneficiaries with clear privacy policies and procedures.")}
            </li>
            <li>
             {t("We pledge to use e-learning systems that support various types of devices, regardless of their systems, and are compatible with all devices, including tablets and smartphones.")}
            </li>
            <li>
              {t("We pledge to provide technical and educational assistance to trainers and trainees throughout the duration of the training implementation.")}
            </li>
            <li>
              {t("We pledge not to exceed the permitted number of trainees in simultaneous virtual classes.")}
            </li>
            <li>
              {t("We pledge and acknowledge to provide a technical infrastructure system that can withstand systems, numbers of beneficiaries, and content of all kinds without interruption.")}
            </li>
            <li>
             {t("We are committed to providing alerts service in learning management systems to alert trainees of requirements on an ongoing basis to improve training continuity and follow up on tasks and assignments within the training program that are more than a month long.")}
            </li>
            <li>{t("We are committed to providing the feature of searching for digital content in the system.")}</li>
            <li>
             {t("We are committed to providing health training courses and electronic manuals for programs used in electronic training environments for trainees.")}
            </li>
            <li>
              {t("We are committed to ensuring that technicians, administrators, and technicians obtain professional certificates in the field of e-learning.")}
            </li>
            <li>
              {t("We are committed to ensuring that the supervisory staff obtains professional certificates in the field of e-learning.")}
            </li>
            <li>
              {t("We are committed to ensuring that technicians, administrators, and technicians obtain professional certificates in the field of e-learning.")}
            </li>
          </ul>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default PublicPolicies;
