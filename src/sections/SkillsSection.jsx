import React from "react";
import { skills } from "../data/skills";
import { SkillsCard } from "../components/SkillsCard";
import styled from "styled-components";

export const SkillsSection = () => {
  return (
    <Wrapper>
      <Title>Skills</Title>
      <SkillsGrid>
        {skills.map((category, index) => (
          <li key={index}>
            <SkillsCard category={category} />
          </li>
        ))}
      </SkillsGrid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
  padding: 48px 16px; 
  gap: 24px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  line-height: 56px; 

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;

const SkillsGrid = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
    text-align: center; 
  }

  /* Desktop */
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    text-align: flex-start;
    gap: 24px 16px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;