import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import HomePage from "../../pages/HomePage";
import Courses from "../../pages/Courses";
import Trainers from "../../pages/Trainers";
import AboutUs from "../../pages/AboutUs";
import CallUs from "../../pages/CallUs";
import SignInForm from "../../pages/SignInForm";
import RegisterForm from "../../pages/RegisterForm";

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
      <Route path="/التسجيل" element={
        <Fragment>
            <SignInForm />
        </Fragment>
      } />
      <Route path="/إنشاء_حساب" element={
        <Fragment>
            <RegisterForm />
        </Fragment>
      } />
    </Routes>
  );
};

export default AllRoutesProvider;
