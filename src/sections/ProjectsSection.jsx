import React from "react";
import { projects } from "../data/projects"; //hämtar saker vi behöver, här en låda med lappar med info om våra projekt
import { ProjectCard } from "../components/ProjectCard"; // här är receptet för hur ett projektkort ska se ut, och hämtas från compontents. 

export const ProjectsSection = () => {
  return (
    <section>
      <h2>Featured Projects</h2>

      {projects.map((projects, index) => (
        <ProjectCard key={index} data={projects} /> //key-index, hur många projekt? Så här många blir gjorda och alla kort får vars ett nr. 
      ))}
    </section>
  );
}


//här hämtar vi alla projekt och skapar ett kort per projekt. "Vi bygger ett rum till ett hus". Först rubrik, sen tar vi alla projekt från projects-lådan och skapar ett nytt projectcard för varje projekt. datan skickas in i kortet. 