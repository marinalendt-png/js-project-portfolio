import React from "react";

export const ArticleCard = ({ data }) => {
  return (
    <div className="article-card">
      <p>{data.date}</p>
      <h3>{data.title}</h3>
      <a href={data.link}>Read article</a>
    </div>
  );
}

