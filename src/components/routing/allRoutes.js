import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";
import HomePage from "../../pages/HomePage";
import Courses from "../../pages/Courses";
import Trainers from "../../pages/Trainers";
import AboutUs from "../../pages/AboutUs";
import CallUs from "../../pages/CallUs";

const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Fragment>
            <NavBar />
            <HomePage />
            <Footer />
        </Fragment>
      } />
      <Route path="/courses" element={
        <Fragment>
            <NavBar />
            <Courses />
            <Footer />
        </Fragment>
      } />
      <Route path="/trainers" element={
        <Fragment>
            <NavBar />
            <Trainers />
            <Footer />
        </Fragment>
      } />
      <Route path="/aboutUs" element={
        <Fragment>
            <NavBar />
            <AboutUs />
            <Footer />
        </Fragment>
      } />
      <Route path="/callUs" element={
        <Fragment>
            <NavBar />
            <CallUs />
            <Footer />
        </Fragment>
      } />
    </Routes>
  );
};

export default AllRoutesProvider;
