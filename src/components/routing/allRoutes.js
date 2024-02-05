import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";
import HomePage from "../../pages/HomePage";
import Courses from "../../pages/Courses";
import Trainers from "../../pages/Trainers";
import AboutUs from "../../pages/AboutUs";
import CallUs from "../../pages/CallUs";
import TermsAndConditions from "../../pages/TermsAndConditions";
import PublicPolicies from "../../pages/PublicPolicies";
import TechnicalSupport from "../../pages/TechnicalSupport";
import ComplaintsSuggestions from "../../pages/ComplaintsSuggestions";
import SignInForm from "../../pages/SignInForm";
import RegisterForm from "../../pages/RegisterForm";
import CoursesDetails from "../../pages/CoursesDetails";
import CourseDetails from "../../pages/CourseDetails";
import JoinTrainers from "../../pages/JoinTrainers";
import Recruitment from "../../pages/Recruitment";

const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <HomePage />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/courses"
        element={
          <Fragment>
            <Courses />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/trainers"
        element={
          <Fragment>
            <Trainers />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/aboutUs"
        element={
          <Fragment>
            <AboutUs />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/callUs"
        element={
          <Fragment>
            <CallUs />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/terms_Conditions"
        element={
          <Fragment>
            <TermsAndConditions />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/policies"
        element={
          <Fragment>
            <PublicPolicies />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/technical_support"
        element={
          <Fragment>
            <TechnicalSupport />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/complaints"
        element={
          <Fragment>
            <ComplaintsSuggestions />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/signIn"
        element={
          <Fragment>
            <SignInForm />
          </Fragment>
        }
      />
      <Route
        path="/register"
        element={
          <Fragment>
            <RegisterForm />
          </Fragment>
        }
      />
      <Route
        path="/details"
        element={
          <Fragment>
            <CoursesDetails />
            <Footer />
          </Fragment>
        }
      />
      <Route
        path="/courseDetails"
        element={
          <Fragment>
            <CourseDetails />
            <Footer />
          </Fragment>
        }
      />

      <Route
        path="/JoinTrainers"
        element={
          <Fragment>
            <JoinTrainers />
            <Footer />
          </Fragment>
        }
      />

      <Route
        path="/recruitment"
        element={
          <Fragment>
            <Recruitment />
            <Footer />
          </Fragment>
        }
      />
    </Routes>
  );
};

export default AllRoutesProvider;
