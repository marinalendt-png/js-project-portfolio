import ProjectImage1 from "../assets/business-site.png";
import ProjectImage2 from "../assets/recipe-library.png";
import ProjectImage3 from "../assets/weather-app.png";
import ProjectImage4 from "../assets/quiz-app.png";
import happy_thoughts1 from "../assets/happy_thoughts1.png";
import happy_thoughts2 from "../assets/happy_thoughts2.png";
import todo from "../assets/todo.png";
import movies from "../assets/movies.png";

export const projects = [

  {
    images: [happy_thoughts1, happy_thoughts2],
    deviceType: "mobile",
    title: "Happy Thoughts app",
    description: "My first backendproject, a cute little app, where you can send happy thoughts",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    liveDemo: "https://project-happy-thoughts-ml.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-happy-thoughts",
  },

  {
    image: todo,
    deviceType: "mobile",
    title: "Todo app",
    description: "A simple and clean todo application where you can add, check off and delete tasks. Built with React and connected to an API.",
    tech: ["React", "API"],
    liveDemo: "https://todo-app-ml.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-todo",
  },

  {
    image: movies,
    deviceType: "desktop",
    title: "Movies project",
    description: "A movie browser app where you can explore popular films, search by title and view details. Built with React and a movie API. The app is build with par-programming",
    tech: ["React", "API", "Par-programming"],
    liveDemo: "https://project-js-movieapp.netlify.app/",
    viewCode: "https://github.com/SaraEnderborg/js-project-movies",
  },

  {
    image: ProjectImage4,
    deviceType: "mobile",
    title: "Accessibility app",
    description: "Quiz Bonanza! Also a mob-programming project based on accessibility. This app is a quiz with random questions, accessible for everyone!",
    tech: ["HTML", "CSS", "API", "JavaScript", "TypeScript", "Mob-programming", "Tailwind CSS"],
    liveDemo: "https://quizbonanza.netlify.app/",
    viewCode: "https://github.com/gabriellaberko/js-project-accessibility",
  },

  {
    image: ProjectImage3,
    deviceType: "mobile",
    title: "Weather App",
    description: "This was a very fun mob-programming project. A weather app were we used real-live API from SMHI",
    tech: ["HTML", "CSS", "API", "JavaScript", "TypeScript", "Mob-programming"],
    liveDemo: "https://project-weather-app-b2.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-weather-app",
  },

  {
    image: ProjectImage2,
    deviceType: "desktop",
    title: "Recipe library",
    description: "This is a basic recipe-site where I used API for the first time. A recipe library app where you can search for different recipes based on cuisines",
    tech: ["HTML", "CSS", "API", "JavaScript"],
    liveDemo: "https://marina-recipelibrary.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-recipe-library",
  },

  {
    image: ProjectImage1,
    deviceType: "desktop",
    title: "Business site",
    description: "My very first project in coding ever. A fictive webpage about a small sourdough-based bakery. Built only with HTML and CSS",
    tech: ["HTML", "CSS"],
    liveDemo: "https://breadrevolt.netlify.app/",
    viewCode: "https://github.com/marinalendt-png/js-project-business-site",
  },





];

