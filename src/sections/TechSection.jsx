import React from "react";
import { tech } from "../data/tech";
import styled from "styled-components";

export const TechSection = () => {
  return (
    <Wrapper aria-label="Tech I use">
      <h2>Tech</h2>
      <TechList>
        {tech.map((item) => (
          <TechItem key={item}>{item}</TechItem>
        ))}
      </TechList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: rgba(0, 0, 0, 1);
  display: flex;
  padding: 64px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h2 {
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  /* Tablet */
  @media (min-width: 768px) {
    padding: 80px 24px;

    h2 {
      font-size: 40px;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 80px 24px;

    h2 {
      font-size: 48px;
    }
  }
`;

const TechList = styled.ul`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 900px;
`;

const TechItem = styled.li`
  padding: 10px 18px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }
`;
