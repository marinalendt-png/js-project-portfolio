import React from "react";

import { GlobalStyles } from "./styles/GlobalStyles";
import { HeaderSection } from "./sections/HeaderSection";
import { TechSection } from "./sections/TechSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderSection />
      <TechSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}



