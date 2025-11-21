import React from "react";
import { tech } from "../data/tech";

export const TechSection = () => {
  return (
    <section>
      <h2>Tech</h2>
      <p>{tech.join(",")}</p>
    </section>
  );
};

//tech.join= Du har en låda med ord och sen använder du varje ord med ett komma emellan. 