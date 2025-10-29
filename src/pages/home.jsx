import React from "react";
import ProfileCard from "../components/ProfileCard";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <ProfileCard />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <Testimonials />
    </div>
  );
};

export default Home;
