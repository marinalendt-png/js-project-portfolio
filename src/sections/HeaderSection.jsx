import React from "react";
import styled from "styled-components";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";

export const HeaderSection = () => {
  return (
    <Wrapper>
      <TextBox>
        <h3>Hi there, I´m</h3>
        <h1>Marina Lendt</h1>
        <h3>Frontend Developer in training. I love teamwork and like building friendly, accessible websites</h3>
        <p>I am a nurse who, in the middle of my carreer, changed my carreer to web development and discoverd how rewarding it is to create solutions that work. Teamwork is where I really preform at my best - my experience in both healthcare and elite sports has given med strong collaboration skills. </p>
      </TextBox>

      <ImageBox>
        <img src={picture1} alt="Picture 1" />
        <img src={picture2} alt="Picture 2" />
        <img src={picture3} alt="Picture 3" />
      </ImageBox>

    </Wrapper>
  );
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 64px 16px;
`;

const TextBox = styled.div`
    padding: 64px 16 px;
    display: flex;
    flex-direction: column;
    gap: 24px;

  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  }

  h1 {
    text-align: center;
    font-size: 52px;
    font-weight: 700;
    line-height: 56px;
  }

  p {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;

const ImageBox = styled.div`
    width: 315px;
    height: 171px;
    position: relative; 
    display: flex;
    justify-content: center;

  img {
    width: 144px;
    height: 154px;
    border-radius: 12px;
    object-fit: cover;
    position: absolute;
    top:0;
  }
  
  img:nth-child(1) {
    left: 0;                      /* placera till vänster */
    transform: rotate(-4.6deg);
    z-index: 1;                   /* ligger bakom mittenbilden */
  }
  img:nth-child(2){
   left: 50%; 
   transform: translateX(-50%);   /* centrerar mittenbilden */
    z-index: 3;
    }

  img:nth-child(3){
    right: 0;                     /* placera till höger */
    transform: rotate(4.6deg);
   z-index: 1;                    /* ligger bakom mittenbilden */
  }
  `;