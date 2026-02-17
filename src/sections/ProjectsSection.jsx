import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import styled from "styled-components";

export const ProjectsSection = () => {
  return (
    <Wrapper>
      <Title>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (min-width: 768px) {
    padding: 64px 24px;
    gap: 56px;
  }
  /* Desktop */
  @media (min-width: 1024px) {
    padding: 72px 32px;
    gap: 56px;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-size: 32px; 
  text-align: center; 
  font-weight: 600;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 44px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  /* Tablet */
  @media (min-width: 768px) {
    gap: 48px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    gap: 56px;
  }
`;

