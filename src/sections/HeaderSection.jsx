import React from "react";
import styled from "styled-components";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";

export const HeaderSection = () => {
  return (
    <Wrapper>
      <TextBox>
        <p>Hi there, I´m</p>
        <h1>Marina Lendt</h1>
      </TextBox>

      <ContentWrapper>
        <h2>Frontend Developer in training. I love teamwork and like building friendly, accessible websites</h2>
        <ImageBox>
          <img src={picture1} alt="Picture of nature" />
          <img src={picture2} alt="Profile picture" />
          <img src={picture3} alt="Picture of a computer" />
        </ImageBox>
      </ContentWrapper>

      <TextBoxInfo>
        <p>I am a nurse who, changed my career to web development and discoverd how rewarding it is to create solutions that work. Teamwork is where I really preform at my best - my experience in both healthcare and elite sports has given med strong collaboration skills. </p>
      </TextBoxInfo>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 64px 16px;
  width: 100%;

  /* Tablet */
  @media (min-width: 768px) {
    padding: 64px 24px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 128px 0 64px 0;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 740px;
  text-align: center;
  align-items: center;
  gap: 24px;

  p, h1 {
    color: var(--color-text-primary);
  }
  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    margin: 0;
  }

  h1 {
    font-size: 52px;
    font-weight: 700;
    line-height: 56px;
    margin: 0; 
  }

/* Tablet */
  @media (min-width: 768px) {
    p {
      font-size: 24px;
      text-align: left;
    }

    h1 {
      font-size: 52px;
      line-height: 100px;
      text-align: left;
    }
  }   

    /* Desktop */
  @media (min-width: 1024px) {
    max-width: 1100px;

    p {
      font-size: 30px;
    }

    h1 {
      font-size: 100px;
      line-height: 100px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;  /* Mobile: h3 above the img */
  align-items: center;
  gap: 24px;

  h3 {
    text-align: center;
    font-size: 20px;
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: column; /* Tablet/Desktop: h3 under the img */

    h2 {
      text-align: left;
      font-size: 24px;
      margin-top: 24px; /* avstånd från bilden */
    }
  }

  @media (min-width: 1024px) {
    h2 {
      text-align: center;
      font-size: 30px;
      margin-top: 40px;
    }
  }
`;

const ImageBox = styled.div`
  position: relative; 
  width: 100%;
  max-width: 315px;
  height: 171px;
  margin: 0 auto;
  
  img {
    border-radius: 12px;
    object-fit: cover;
    position: absolute;
    top:0;
  }

  img:nth-child(1) {
    left: 0;                      /* placera till vänster */
    transform: rotate(-5deg);
    transform-origin: top right;
    z-index: 1;  
    width: 144px;
    height: 154px;                 /* ligger bakom mittenbilden */
  }
    
  img:nth-child(2) {
    left: 50%; 
    transform: translateX(-50%) rotate(0deg);   /* centrerar mittenbilden */
    transform-origin: center center;
    z-index: 3;
    width: 144px;
    height: 154px;  
  }

  img:nth-child(3) {
    right: 0;                     /* placera till höger */
    transform: rotate(5deg);
    transform-origin: top left;
    z-index: 1;
    width: 144px;
    height: 154px;                      /* ligger bakom mittenbilden */
  }
    
    /* Tablet */
    @media (min-width: 768px) {
      max-width: 500px;
      height: 210px;

      img:nth-child(1) {
        width: 260px;
        height: 277px; 
        left: -70px;
      }

      img:nth-child(2) {
        width: 260px;
        height: 277px; 
      }

      img:nth-child(3) {
        width: 260px;
        height: 277px;
        right: -70px;
      }
    }

    /* Desktop */
    @media (min-width: 1024px) {
      max-width: 1100px;
      height: 382px; 

      img:nth-child(1) {
      width: 358px;
      height: 382px;
      left: 60px;
    }

    img:nth-child(2) {
      width: 358px;
      height: 382px;
    }

    img:nth-child(3) {
      width: 358px;
      height: 382px;
      right: 60px ;
    }
  }
`;

const TextBoxInfo = styled.div`
  font-size: 16px;
  text-align: center;
  gap: 24px;
  width: 100%;
  max-width: 1000px;

  p {
    line-height: 24px;
  }

  @media (min-width: 768px) {
      text-align: left;
      max-width: 700px;
    }

    @media (min-width: 1024px) {
      text-align: center;
      max-width: 1000px;
      font-size: 18px;
      margin-top: 30px;
    }
  }
  `;