import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../navBar/NavBar";
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

const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Fragment>
            <HomePage />
            <Footer />
        </Fragment>
      } />
      <Route path="/الدورات" element={
        <Fragment>
            <Courses />
            <Footer />
        </Fragment>
      } />
      <Route path="/المدربين" element={
        <Fragment>
            <Trainers />
            <Footer />
        </Fragment>
      } />
      <Route path="/من_نحن" element={
        <Fragment>
            <AboutUs />
            <Footer />
        </Fragment>
      } />
      <Route path="/إتصل_بنا" element={
        <Fragment>
            <CallUs />
            <Footer />
        </Fragment>
      } />
      <Route path="/الشروط" element={
        <Fragment>
            <TermsAndConditions />
            <Footer />
        </Fragment>
      } />
      <Route path="/السياسات" element={
        <Fragment>
            <PublicPolicies />
            <Footer />
        </Fragment>
      } />
      <Route path="/الدعم_الفني" element={
        <Fragment>
            <TechnicalSupport />
            <Footer />
        </Fragment>
      } />
      <Route path="/الشكاوي" element={
        <Fragment>
            <ComplaintsSuggestions />
            <Footer />
        </Fragment>
      } />
    </Routes>
  );
};

export default AllRoutesProvider;
