import React from "react";

import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { TechSection } from "./sections/TechSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ArticleSection } from "./sections/ArticleSection";
import { ContactSection } from "./sections/ContactSection";
// import { Buttons } from "./components/Buttons";



export const App = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
      <SkillsSection />
      <ArticleSection />
      <ContactSection />
    </>
  );
}



