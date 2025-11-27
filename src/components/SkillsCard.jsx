import React from "react";
import styled from "styled-components";

export const SkillsCard = ({ category }) => {
  return (
    <CardWrapper>
      <CategoryTitle>{category.title}</CategoryTitle>
      <SkillTags aria-label={`Skills in ${category.title}`}>
        {category.skills.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </SkillTags>
    </CardWrapper>
  );
};

//här tar vi emot category som prop. Vi loopar igenom category.skills för att visa varje skill i en lista. 

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(0, 0, 0, 1) ;
  color: rgba(255, 255, 255, 1) ; 
  width: 165px;
`;

const CategoryTitle = styled.h3`
  display: inline-flex;
  justify-content: center;
  padding: 2px 6px;
  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
`;

const SkillTags = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

const Tag = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;

