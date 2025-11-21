import React from "react";
import { skills } from "../data/skills";
import { SkillsCard } from "../components/SkillsCard";

export const SkillsSection = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <SkillsCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}; 