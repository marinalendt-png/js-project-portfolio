import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import styled from "styled-components";
import IconArrowDownSVG from "../assets/icon-arrow-down.svg";

export const ProjectsSection = () => {
  return (
    <Wrapper>
      <Title>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>

      <SeeMoreButton>
        <IconArrowDown src={IconArrowDownSVG} alt="See more projects here" />
        See more projects
      </SeeMoreButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: 1024px) {
    padding: 128px 0;
    gap: 128px;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: rgba(0, 0, 0, 1);

  @media (min-width: 1024px) {
    font-size: 80px;
    }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  width: 100%;

  /* Desktop */
  @media (min-width: 1024px) {
    gap: 125px; 
    align-items: flex-start;
  }
`;

const SeeMoreButton = styled.button`
  width: 271px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;

const IconArrowDown = styled.img`
  width: 30px;
  height: 30px;
`;


