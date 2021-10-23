export type TLinks = {
  live: string;
  github: string;
};

export type TProject = {
  title: string;
  id: string;
  summary: string;
  links: TLinks;
  technologies: string[];
  mockupImg?: string;
};

const projects: TProject[] = [
  {
    title: 'Portfolio',
    id: 'portfolio',
    summary: 'This portfolio website.',
    links: {
      live: '',
      github: 'https://github.com/apiwonska/portfolio',
    },
    technologies: ['HTML', 'Sass', 'CSS Modules', 'React', 'TypeScript'],
    mockupImg: 'mockup_portfolio.png',
  },
  {
    title: 'Favourite Recipes',
    id: 'favouriteRecipes',
    summary:
      "A simple CRUD application, that allows you to store all the links to your favourite online recipes in one place. You can add a note, category and link to an image to each recipe. Records are saved to Airtable. Users can browse saved recipes by text and category. Currently, it's not possible to create a user account.",
    links: {
      live: 'https://favourite-recipes.netlify.app',
      github: 'https://github.com/apiwonska/Favourite-Recipes',
    },
    technologies: [
      'HTML',
      'CSS',
      'React',
      'TypeScript',
      'React Query',
      'Bootstrap 4',
      'React Testing Library',
      'Rest API',
    ],
    mockupImg: 'mockup_favouriteRecipes.png',
  },
  {
    title: 'Forum',
    id: 'forum',
    summary:
      'A forum application with access restricted to authenticated users. Users can create accounts, create a profile, create threads and posts, edit and delete posts. An admin panel is also available for users with appropriate permissions.',
    links: {
      live: '',
      github: 'https://github.com/apiwonska/forum',
    },
    technologies: [
      'HTML',
      'Styled Components',
      'JavaScript',
      'React',
      'Redux',
      'JavaScript',
      'Django',
      'PostgreSQL',
      'Django REST Framework',
    ],
  },
  {
    title: 'Trip Expenses',
    id: 'tripExpenses',
    summary:
      'An application for tracking trip expenses during international trips. Allows to input expenses in various currencies and assign a category to it. For each trip, you will have a summary of expenses in a chart. It was created as a group project during Coders Camp.',
    links: {
      live: '',
      github: 'https://github.com/dobrzyckahanna/Trip-Expenses-App',
    },
    technologies: [
      'HTML',
      'Styled Components',
      'JavaScript',
      'React',
      'Redux',
      'Express',
      'MongoDB',
    ],
  },
  {
    title: 'Yoga House',
    id: 'yogaHouse',
    summary:
      'The website of a fictionary yoga school with a system to manage class schedule and attendance. Authenticated users can sign up or sign off the classes. If the number of attendees reaches the limit for the group, signing up is disabled.',
    links: {
      live: '',
      github: 'https://github.com/apiwonska/yogahouse',
    },
    technologies: ['Django', 'Python', 'HTML', 'CSS'],
  },
  {
    title: 'Foto Studio',
    id: 'fotoStudio',
    summary:
      'The website of a fictionary photo studio. A simple business website with a blog.',
    links: {
      live: '',
      github: 'https://github.com/apiwonska/foto-studio',
    },
    technologies: ['Django', 'Python', 'HTML', 'CSS'],
  },
];
export default projects;
