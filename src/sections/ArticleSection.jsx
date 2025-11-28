import React from "react";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";
import styled from "styled-components";


export const ArticleSection = ({ data }) => {
  return (
    <SectionWrapper>
      <SectionTitle>My Words</SectionTitle>
      <ArticlesGrid as="ul">
        {articles.map((article, index) => (
          <li key={index}>
            <ArticleCard data={article} />
          </li>
        ))}
      </ArticlesGrid>
    </SectionWrapper>
  );
}

//ArticleSection är en förälder som har en hel låda med articles. 
//ArticleCard är ett barn som får en artikel i taget via props= här data. 


const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 64px 16px;
  background-color: rgba(255, 255, 255, 1);

  /* Tablet */
   @media (min-width: 768px) {
   padding: 64px 24px; 
    gap: 64px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    padding: 128px 32px;
    gap: 128px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  line-height: 44px;

  /* Tablet */
  @media (min-width: 768px) {
    font-size: 48px;
  }

  /* Desktop */
  @media (min-width: 1024px) {
    font-size: 80px;
  }
`;

const ArticlesGrid = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px; 
  margin: 0 auto;

  /* Tablet */
  @media (min-width: 768px) {
    gap: 64px;
  }

  /* Desktop */ 
  @media (min-width: 1024px) {
    gap: 96px;
  }
`;
