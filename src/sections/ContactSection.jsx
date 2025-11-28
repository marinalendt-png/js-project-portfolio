import React from "react";
import styled from "styled-components";
import ProfileImage from "../assets/profile-img.jpg";
import ButtonInstagramSVG from "../assets/btn-instagram.svg";
import ButtonLinkedInSVG from "../assets/btn-linkedin.svg";
import ButtonGithubSVG from "../assets/btn-github.svg";


export const ContactSection = () => {
  return (
    <Wrapper>
      <Title>Let´s Talk</Title>
      <Image src={ProfileImage} alt="Profile picture of Marina Lendt" />
      <ContactInfo>
        <Name>Marina Lendt</Name>
        <Phone>+46(0)708 60 72 77</Phone>
        <Email>marinalendt@gmail.com</Email>
      </ContactInfo>
      <SocialLinks>
        <SocialButton href="www.linkedin.com/in/marina-lendt-1b3439194" aria-label="Visit me on LinkedIn" target="blank" rel="noopener noreferrer">
          <img src={ButtonLinkedInSVG} alt="LinkedIn" />
        </SocialButton>
        <SocialButton href="https://github.com/dashboard" aria-label="Visit me on Github" target="blank" rel="noopener noreferrer">
          <img src={ButtonGithubSVG} alt="Github" />
        </SocialButton>
        <SocialButton href="https://www.instagram.com/marinalendt/" aria-label="Visit me on Instagram" target="blank" rel="noopener noreferrer">
          <img src={ButtonInstagramSVG} alt="Instagram" />
        </SocialButton>
      </SocialLinks>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 16px;
  gap: 32px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
`;

const Image = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;

  /* Tablet och desktop */
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const Phone = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const Email = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialButton = styled.a`
  padding: 8px 12px;
  transition: 0.2s;

 &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;
