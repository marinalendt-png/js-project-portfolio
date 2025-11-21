import React from "react";
import { articles } from "../data/articles";
import { ArticleCard } from "../components/ArticleCard";

export const ArticleSection = ({ data }) => {
  return (
    <section>
      <h2>My journey</h2>
      {articles.map((article, index) => (
        <ArticleCard key={index} data={article} />
      ))}
    </section>
  );
}

//ArticleSection är en förälder som har en hel låda med articles. 
//ArticleCard är ett barn som får en artikel i taget via props= här data. 