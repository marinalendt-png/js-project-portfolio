import React from "react";

export const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <ul>
        {data.tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <a href={data.liveDemo}>Live demo</a>
        <a href={data.viewCode}>View code</a>
      </div>
    </div>
  );
}


//data är ett helt projekt, som ett paket med info. Vi tar emot paketet och visar det. Vi gör ett recept som heter ProjectCard. DATA= vi får ett paket med info kallad data, när vi använder detta recept. Return=nu börjar vi bygga vad PC ska visa. data.title= ta titeln från paketet data och visa den här. Samma sak med description. UL=visar punktlista över tekniker. data.tech.map....=data.tech är en array. map säger, för varje sak i listan, skapa en punkt i listan. Item är namnet på tekniken, text react, HTML. Li key....=skapar själva punkten i listan. Key=index är ett id som hjälper React att hålla reda på varje punkt. 