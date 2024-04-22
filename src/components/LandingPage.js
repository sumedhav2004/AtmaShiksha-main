import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import CoursesSwiper from "./Courses/CoursesSwiper";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoursesSwiper />
      <Footer />
    </div>
  );
};

export default LandingPage;
