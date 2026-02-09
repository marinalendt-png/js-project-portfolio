import React from "react";
import styled from "styled-components";
import ProfileImage from "../assets/profile-img.jpg";

export const ContactSection = () => {
  return (
    <Footer>
      <FooterContent>
        <Image src={ProfileImage} alt="Profile picture of Marina Lendt" />
        <Name>Marina Lendt</Name>
        <ContactLink href="tel:+46708607277">+46(0)708 60 72 77</ContactLink>
        <ContactLink href="mailto:marinalendt@gmail.com">marinalendt@gmail.com</ContactLink>
      </FooterContent>
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 1);
  padding: 64px 16px;

  @media (min-width: 768px) {
    padding: 80px 24px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
`;

const ContactLink = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
