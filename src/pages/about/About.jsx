import React from "react";
import AboutHero from "./AboutHero";
import RuntimeSection from "../../components/ui/RuntimeSection";
import CICDSection from "../../components/ui/CICDSection";

function About() {
  return (
    <>
      {/* 🔥 MAIN HERO FIRST */}
      <AboutHero />

      {/* ⚡ SUPPORTING SECTION */}
      <RuntimeSection />

      <CICDSection />
    </>
  );
}

export default About;
