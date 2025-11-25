import React from "react";
import { projects } from "../data/projects"; //hämtar saker vi behöver, här en låda med lappar med info om våra projekt
import { ProjectCard } from "../components/ProjectCard"; // här är receptet för hur ett projektkort ska se ut, och hämtas från compontents. 
import styled from "styled-components";
import IconWebSVG from "../assets/icon-web.svg";
import IconGithubSVG from "../assets/icon-github.svg";
import IconArrowDownSVG from "../assets/icon-arrow-down.svg";




//här hämtar vi alla projekt och skapar ett kort per projekt. "Vi bygger ett rum till ett hus". Först rubrik, sen tar vi alla projekt från projects-lådan och skapar ett nytt projectcard för varje projekt. datan skickas in i kortet. 
export const ProjectsSection = () => {
  return (
    <Wrapper>
      <Title>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCardSection key={index}>
            <ProjectImage key={project.title} src={project.image} alt={project.title} />
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
                  <IconWeb src={IconWebSVG} alt="Live demo" /> Live demo
                </ButtonPrimary>
                <ButtonPrimary as="a" href={project.viewCode} target="blank" rel="noopener noreferrer">  {/*öppnar i ny flik samt säkerhetsinställning vid öppning av nya filer */}
                  <IconGithub src={IconGithubSVG} alt="View Code" /> View Code
                </ButtonPrimary>
              </Buttons>
            </ProjectInfo>
          </ProjectCardSection>
        ))}
      </ProjectsGrid>

      <SeeMoreButton>
        <IconArrowDown src={IconArrowDownSVG} />
        See more projects
      </SeeMoreButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
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
  color: #000;
`;

const ProjectsGrid = styled.div`
display: flex;
flex-direction: column;
gap: 64px;
width: 100%;
`;

const ProjectCardSection = styled.div`
  width: 100%;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 343/479;
  border-radius: 12px;
  object-fit: contain;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 14px;
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
`;

const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #000;
  color: #fff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
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
  border: 2px solid #000;
  border-radius: 12px;
  background: #fff;
  font-weight: 500;
  cursor: pointer;
`;

const IconArrowDown = styled.img`
  width: 24px;
  height: 24px;
  background-image: url(${IconArrowDownSVG});
  background-size: cover;
  background-repeat: no-repeat;
`;


