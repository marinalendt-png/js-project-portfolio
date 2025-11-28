import ProjectImage1 from "../assets/business-site.png";
import ProjectImage2 from "../assets/recipe-library.png";
import ProjectImage3 from "../assets/weather-app.png";
import ProjectImage4 from "../assets/quiz-app.png";

export const projects = [
  {
    image: ProjectImage1,
    title: "Business site",
    description: "My very first project in coding ever. A fictive webpage about a small sourdough-based bakery. Built only with HTML and CSS",
    tech: ["HTML", "CSS"],
    liveDemo: "https://breadrevolt.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-business-site",
  },

  {
    image: ProjectImage2,
    title: "Recipe library",
    description: "This is a basic recipe-site where I used API for the first time. A recipe library app where you can search for different recipes based on cuisines",
    tech: ["HTML", "CSS", "API", "JavaScript"],
    liveDemo: "https://marina-recipelibrary.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-recipe-library",
  },

  {
    image: ProjectImage3,
    title: "Weather App",
    description: "This was a very fun mob-programming project. A weather app were we used real-live API from SMHI",
    tech: ["HTML", "CSS", "API", "JavaScript", "TypeScript", "Mob-programming"],
    liveDemo: "https://project-weather-app-b2.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-weather-app",
  },

  {
    image: ProjectImage4,
    title: "Accessibility app",
    description: "Quiz Bonanza! Also a mob-programming project based on accessibility. This app is a quiz with random questions, accessible for everyone!",
    tech: ["HTML", "CSS", "API", "JavaScript", "TypeScript", "Mob-programming", "Tailwind CSS"],
    liveDemo: "https://quizbonanza.netlify.app/",
    viewCode: "https://github.com/gabriellaberko/js-project-accessibility",
  },
];

