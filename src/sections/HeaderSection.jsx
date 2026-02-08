import React from "react";
import styled from "styled-components";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";

export const HeaderSection = () => {
  return (
    <Wrapper>
      <TextBox>
        <h1>Marina Lendt</h1>
        <h2>Frontend Developer</h2>
      </TextBox>
      <ImageBox>
        <Avatar src={picture2} alt="Profile picture" />
      </ImageBox>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 64px 16px;
  width: 100%;

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 96px 24px;
    gap: 48p;x;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 128px 0 64px 0;
    gap: 80px;
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
    font-weight: 500;
  }

/* Tablet */
  @media (min-width: 768px) {
    text-align: left;

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
      font-size: 80px;
    }

    h2 {
      font-size: 30px;
    }
  }
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 220px;
  
  /* Tablet */
  @media (min-width: 768px) {
      max-width: 320px;
  }

  /* Desktop */
    @media (min-width: 1024px) {
      max-width: 420px;
  }
`;

const Avatar = styled.img`
 width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;

  border: 4px solid #fff;
  outline: 3px solid #838293ff;
`;
