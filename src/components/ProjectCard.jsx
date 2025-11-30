import React from "react";
import styled from "styled-components";
import IconWebSVG from "../assets/icon-web.svg";
import IconGithubSVG from "../assets/icon-github.svg";

export const ProjectCard = ({ project }) => {
  const { title, description, tech, liveDemo, viewCode, image } = project;

  return (
    <CardWrapper role="group" aria-label={`Project: ${title}`}>
      <ProjectImage src={image} alt={`${title} picture showing project`} />
      <ProjectInfo>
        <TechTags>
          {tech.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </TechTags>

        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <Buttons>
          <ButtonPrimary href={liveDemo} target="_blank" rel="noopener noreferrer">
            <Icon src={IconWebSVG} alt="" aria-hidden="true" /> Live demo
          </ButtonPrimary>
          <ButtonPrimary href={viewCode} target="_blank" rel="noopener noreferrer">
            <Icon src={IconGithubSVG} alt="" aria-hidden="true" /> View code
          </ButtonPrimary>
        </Buttons>

      </ProjectInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  /*  Desktop */
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 343px;
  max-height: 479px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  object-fit: cover;

  /* Tablet */
  @media (min-width: 768px) {
    max-width: 696px;
    margin: 0 auto;
  }

   /* Desktop */
  @media (min-width: 1024px) {
    max-width: 479px;
    flex-shrink: 0;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  /* Tablet */
  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    width: 100%; 
    margin: 0;
    max-width: 479px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    max-width: 580px;
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
  font-size: 16px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  line-height: 1.4;

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 303px;

  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

const Icon = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 8px;
`;