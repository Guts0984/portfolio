export interface IProject {
  title: string;
  projectLink: string;
  githubLink: string;
  date: string;
  description?: string;
  image: string;
}

export const projects: IProject[] = [
  {
    title: "React-pizza",
    projectLink: "https://reactpizza43.netlify.app/",
    githubLink: "https://github.com/Guts0984/react-pizza",
    description:
      "React-pizza is a pizza delivery application that allows users to order pizza online. This project was built using React, Redux, and TypeScript.",
    date: "2025-02-25",
    image: "/images/projects/react-pizza.png",
  },
  {
    title: "Forkify",
    projectLink: "https://forkify-dariy.netlify.app/",
    githubLink: "https://github.com/Guts0984/forkify",
    date: "2024-11-12",
    description:
      "Forkify is a recipe app that allows users to search for recipes, save them, and create a shopping list. This is my first big project written in vanilla JavaScript.",
    image: "/images/projects/forkify.png",
  },
];
