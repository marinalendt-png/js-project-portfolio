import React from "react";
import styled from "styled-components";
import IconWebSVG from "../assets/icon-web.svg";
import IconGithubSVG from "../assets/icon-github.svg";

export const ProjectCard = ({ project }) => {
  const { title, description, tech, liveDemo, viewCode, image, images, deviceType } = project;

  return (
    <CardWrapper role="group" aria-label={`Project: ${title}`}>
      <ImageWrapper>
        {images && images.length > 1 ? (
          <ImageContainer>
            {images.map((img, index) => (
              <ProjectImage
                key={index}
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                $deviceType={deviceType}
                $multiple={true}
              />
            ))}
          </ImageContainer>
        ) : (
          <ProjectImage
            src={image || (images && images[0])}
            alt={`${title} picture showing project`}
            $deviceType={deviceType}
          />
        )}
      </ImageWrapper>

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
  align-items: center;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

   /* Tablet */
  @media (min-width: 768px) {
    padding-bottom: 48px;
  }

  /*  Desktop */
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    padding-bottom: 48px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  /* Desktop */
  @media (min-width: 1024px) {
    width: 380px;
    flex-shrink: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 480px;
  }

  @media (min-width: 1024px) {
    max-width: 380px;
    flex-shrink: 0;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: contain;
  margin: 0 auto;

  /* Mobile device images */
  ${props => props.$deviceType === 'mobile' && `
    aspect-ratio: 9 / 16;
    max-width: ${props.$multiple ? '190px' : '220px'};
  `}

  /* Desktop images */
  ${props => props.$deviceType === 'desktop' && `
    aspect-ratio: 16 / 9;
    max-width: 100%;
  `}

  /* Tablet */
  @media (min-width: 768px) {
    ${props => props.$deviceType === 'mobile' && `
      max-width: ${props.$multiple ? '200px' : '230px'};
    `}
    ${props => props.$deviceType === 'desktop' && `
      max-width: 550px;
    `}

  /* Desktop */
  @media (min-width: 1024px) {
    flex-shrink: 0;
    
    ${props => props.$deviceType === 'mobile' && `
      aspect-ratio: 9 / 16;
      max-width: ${props.$multiple ? '185px' : '210px'};
    `}
    ${props => props.$deviceType === 'desktop' && `
      max-width: 380px;
    `}
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  width: 100%;

  /* Tablet */
  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    max-width: 500px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
    max-width: 450px;
  }
`;

const TechTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;

  /* Desktop */
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Tag = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  line-height: 1.5;

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 15px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  align-self: center;

   /* Desktop */
  @media (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
  }
`;

const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;