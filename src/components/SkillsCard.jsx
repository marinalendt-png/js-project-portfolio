import React from "react";

export const SkillsCard = ({ category }) => {
  return (
    <div className="skills-card">
      <h2>{category.title}</h2>
      <ul>
        {category.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

//här tar vi emot category som prop. Vi loopar igenom category.skills för att visa varje skill i en lista. 
