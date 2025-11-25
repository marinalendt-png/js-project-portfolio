import React from "react";
import { tech } from "../data/tech";
import styled from "styled-components";

export const TechSection = () => {
  return (
    <Wrapper>
      <h2>Tech</h2>
      <p>{tech.join(", ")} </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: #000;
  display: flex;
  padding: 64px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

h2 {
  color: #FFF;
  text-align: center; 
  font-size: 60px;
  font-weight: 700;
}

p {

color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 400;
line-height: 1.4;
max-width: 343 px;
word-wrap: break-word;
}

`;
