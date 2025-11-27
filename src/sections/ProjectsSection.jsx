import React from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import styled from "styled-components";
import IconWebSVG from "../assets/icon-web.svg";
import IconGithubSVG from "../assets/icon-github.svg";
import IconArrowDownSVG from "../assets/icon-arrow-down.svg";

export const ProjectsSection = () => {
  return (
    <Wrapper>
      <Title>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCardSection key={index} role="group" aria-label={`Project: ${project.title}`}>
            <ProjectImage key={project.title} src={project.image} alt={`${project.title} picture showing project`} />
            <ProjectInfo>
              <TechTags>
                {project.tech.map((tech, idx) => (
                  <Tag key={idx}>{tech}</Tag>
                ))}
              </TechTags>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              <Buttons>
                <ButtonPrimary as="a" href={project.liveDemo} target="blank" rel="noopener noreferrer">
                  <IconWeb src={IconWebSVG} alt="" aria-hidden="true" /> Live demo
                </ButtonPrimary>
                <ButtonPrimary as="a" href={project.viewCode} target="blank" rel="noopener noreferrer">
                  <IconGithub src={IconGithubSVG} alt="" aria-hidden="true" /> View Code
                </ButtonPrimary>
              </Buttons>
            </ProjectInfo>
          </ProjectCardSection>
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
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: rgba(0, 0, 0, 1);
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;

  /* Desktop */
  @media (min-width: 1024px) {
    gap: 128px; 
    align-items: stretch; 
  }
`;

const ProjectCardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 696px; 
    margin: 0 auto; 
    align-items: center;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 64px;

  /* change direction every each time */
  &:nth-child(even) {
    flex-direction: row-reverse; 
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto; 
  max-width: 343px;
  max-height: 479px;
  border-radius: 12px;
  object-fit: contain;

  /* Tablet */
  @media (min-width: 768px) {
    max-width: 696px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
   max-width: 479px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 479px; 

  * Tablet */ /* Centers the content */
  @media (min-width: 768px) {
    margin: 0 auto; 
    align-items: center;
    text-align: center;
  }

  /* Desktop */ /* back to the left */
  @media (min-width: 1024px) {
   align-items: flex-start;
   text-align: left; 
   margin: 0; 
  }
`;

const TechTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  display: inline-flex;
  align-items: center; 
  justify-content: center; 
  min-width: 71px;
  min-height: 24px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 14px;

  * Tablet */ 
  @media (min-width: 768px) {
    min-width: 130px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* Tablet */ 
  @media (min-width: 768px) {
    margin: 0 auto;
    align-items: center;
  }

  /* Desktop */ 
  @media (min-width: 1024px) {
    align-items: flex-start;
    margin: 0;
  }
`;

const ButtonPrimary = styled.button`
  width: 271px;
  display: flex;
  align-items: center; 
  gap: 8px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;

   &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;

const IconWeb = styled.img`
  width: 24px;
  height: 24px;
  background-image: url(${IconWebSVG.default});
  background-size: cover;
  background-repeat: no-repeat;
`;

const IconGithub = styled.img`
  width: 24px;
  height: 24px;
  background-image: url(${IconGithubSVG});
  background-size: cover;
  background-repeat: no-repeat;
`;

const SeeMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 1);
  font-weight: 500;
  cursor: pointer;

   &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;

const IconArrowDown = styled.img`
  width: 24px;
  height: 24px;
  background-image: url(${IconArrowDownSVG});
  background-size: cover;
  background-repeat: no-repeat;
`;


