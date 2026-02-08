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
  background: rgba(0, 0, 0, 1) ;
  display: flex;
  padding: 64px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h2 {
    color: rgba(255, 255, 255, 1);
    text-align: center; 
    font-size: 60px;
    font-weight: 700;
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
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, transform 0.2s ease;

`;