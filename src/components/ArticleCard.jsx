import React from "react";
import styled from "styled-components";
import IconWebSVG from "../assets/icon-web.svg";

export const ArticleCard = ({ data }) => {
  return (
    <CardWrapper>
      <ImageBox>
        <Image src={data.image} alt={data.title} />
      </ImageBox>
      <TextBox>
        <DateTag dateTime={data.date}>{data.date}</DateTag>
        <CardTitle>{data.title}</CardTitle>
        <CardText>{data.text}</CardText>
        <ReadButton href={data.link} aria-label={`Read full article: ${data.title}`}>
          <ButtonIcon src={IconWebSVG} alt="" /> Read article
        </ReadButton>
      </TextBox>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 327px; 

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start; 
    max-width: 100%;
    gap: 32px;
  }
`;

const ImageBox = styled.div`
  width: 327px;
  height: 200px; 

  @media (min-width: 768px) {
    width: 380px;
    height: 338px;
    flex-shrink: 0;
  }

  @media (min-width: 1024px) {
    width: 379px;
    height: 311px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
  font-size: 16px;

  /* Tablet */
  @media (min-width: 768px) {
    padding-left:0;
    max-width: calc(100% - 200px);
  }
    
  /* Desktop */
  @media (min-width: 1024px) {
    max-width: calc(100% - 379px);
  }
`;

const DateTag = styled.time`
  display: flex;
  align-items: center;
  width: 130px;
  height: 24px;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: black;
  line-height: 24px;

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const CardText = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  line-height: 22px;
`;

const ReadButton = styled.a`
  width: 271px;
  height: 48px;
  display: inline-flex;
  text-align: center;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1) ;
  border-radius: 12px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #f39c12;
    outline-offset: 2px;
  }
`;

const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;