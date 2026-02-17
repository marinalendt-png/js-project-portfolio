import React from "react";
import styled from "styled-components";
import picture2 from "../assets/picture2.jpg";
import ButtonLinkedInSVG from "../assets/btn-linkedin.svg";
import ButtonGithubSVG from "../assets/btn-github.svg";
import ButtonInstagramSVG from "../assets/btn-instagram.svg";

export const HeaderSection = () => {
  return (
    <Wrapper>
      <ImageBox>
        <Avatar src={picture2} alt="Profile picture" />
      </ImageBox>
      <TextBox>
        <h1>Marina Lendt</h1>
        <h2>Frontend Developer</h2>
        <Intro>
          Passionate about teamwork, loves problem solving and wants to create user-friendly, accessible web experiences.
        </Intro>
        <SocialLinks>
          <SocialButton href="https://www.linkedin.com/in/marina-lendt-1b3439194" aria-label="Visit me on LinkedIn" target="_blank" rel="noopener noreferrer">
            <img src={ButtonLinkedInSVG} alt="LinkedIn" />
          </SocialButton>
          <SocialButton href="https://github.com/dashboard" aria-label="Visit me on Github" target="_blank" rel="noopener noreferrer">
            <img src={ButtonGithubSVG} alt="Github" />
          </SocialButton>
          <SocialButton href="https://www.instagram.com/marinalendt/" aria-label="Visit me on Instagram" target="_blank" rel="noopener noreferrer">
            <img src={ButtonInstagramSVG} alt="Instagram" />
          </SocialButton>
        </SocialLinks>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 80px 16px;
  width: 100%;
  background: rgba(255, 255, 255, 1);

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 100px 24px;
    gap: 48px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 120px 48px 80px 48px;
    gap: 80px;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  text-align: center;
  gap: 16px;

  h1, h2 {
    color: rgba(0, 0, 0, 1);
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  /* Tablet */
  @media (min-width: 768px) {
    text-align: left;

    h1, h2 {
      text-align: left;
    }

    h1 {
      font-size: 56px;
    }

    h2 {
      font-size: 24px;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    h1 {
      font-size: 72px;
    }

    h2 {
      font-size: 28px;
    }
  }
`;

const Intro = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.6);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialButton = styled.a`
  padding: 6px;
  transition: opacity 0.2s ease;

  img {
    filter: invert(1);
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  outline: 3px solid #838293ff;

  /* Tablet */
  @media (min-width: 768px) {
    width: 260px;
    height: 260px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;
