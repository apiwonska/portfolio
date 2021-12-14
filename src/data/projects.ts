export type TLinks = {
  live: string;
  github: string;
};

export type TProject = {
  projectName: string;
  id: string;
  summary: string;
  additionalInfo?: string;
  links: TLinks;
  technologies: string[];
  cardImg?: string;
  images?: string[];
};

const projects: TProject[] = [
  {
    projectName: 'Portfolio',
    id: 'portfolio',
    summary: 'This portfolio website.',
    additionalInfo:
      'The project was completely designed and coded by me. The images show screenshots of the working application.',
    links: {
      live: 'https://annapiwonska.eu',
      github: 'https://github.com/apiwonska/portfolio',
    },
    technologies: [
      'HTML',
      'Sass',
      'CSS Modules',
      'React',
      'TypeScript',
      'React Testing Library',
    ],
    cardImg: 'card_portfolio.webp',
  },
  {
    projectName: 'Favourite Recipes',
    id: 'favouriteRecipes',
    summary:
      "A simple CRUD application, that allows you to store all the links to your favourite online recipes in one place. You can add a note, category and link to an image to each recipe. Records are saved to Airtable. Users can browse saved recipes by text and category. Currently, it's not possible to create a user account.",
    additionalInfo:
      'The project was completely designed and coded by me. The images show screenshots of the working application.',
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
    cardImg: 'card_favouriteRecipes.webp',
    images: [
      'favouriteRecipes-1.webp',
      'favouriteRecipes-2.webp',
      'favouriteRecipes-3.webp',
    ],
  },
  {
    projectName: 'Forum',
    id: 'forum',
    summary:
      'A forum application with access restricted to authenticated users. Users can create accounts, create a profile, create threads and posts, edit and delete posts. An admin panel is also available for users with appropriate permissions.',
    additionalInfo:
      'The project consists of two separate parts: front-end and back-end which are running on different servers.  For more information check github readme file. The project was completely designed and coded by me. The images show screenshots of the working application.',
    links: {
      live: ' https://forum-ap.netlify.app/ ',
      github: 'https://github.com/apiwonska/forum-frontend',
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
      'Swagger UI',
    ],
  },
  {
    projectName: 'Trip Expenses',
    id: 'tripExpenses',
    summary:
      'An application for tracking trip expenses during international trips. Allows to input expenses in various currencies and assign a category to it. For each trip, you will have a summary of expenses in a chart. It was created as a group project during Coders Camp.',
    additionalInfo: 'The images show screenshots of the working application.',
    links: {
      live: 'https://tripexpenses.herokuapp.com/',
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
    cardImg: 'card_tripExpenses.webp',
    images: [
      'tripExpenses-1.webp',
      'tripExpenses-2.webp',
      'tripExpenses-3.webp',
      'tripExpenses-4.webp',
      'tripExpenses-5.webp',
      'tripExpenses-6.webp',
    ],
  },
  {
    projectName: 'Yoga House',
    id: 'yogaHouse',
    summary:
      'The website of a fictionary yoga school with a system to manage class schedule and attendance. Authenticated users can sign up or sign off the classes. If the number of attendees reaches the limit for the group, signing up is disabled.',
    additionalInfo:
      'The project was completely designed and coded by me. The images show screenshots of the working application.',
    links: {
      live: 'https://yogahouse-ap.herokuapp.com',
      github: 'https://github.com/apiwonska/yogahouse',
    },
    technologies: ['Django', 'Python', 'HTML', 'CSS'],
  },
  {
    projectName: 'Foto Studio',
    id: 'fotoStudio',
    summary:
      'The website of a fictionary photo studio. A simple business website with a blog.',
    additionalInfo:
      'The project was completely designed and coded by me. The images show screenshots of the working application.',
    links: {
      live: '',
      github: 'https://github.com/apiwonska/foto-studio',
    },
    technologies: ['Django', 'Python', 'HTML', 'CSS'],
  },
];

export default projects;
