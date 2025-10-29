import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-poppins bg-light text-dark min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <ProfileCard />
        <AboutSection />
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
