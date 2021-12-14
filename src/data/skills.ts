export interface ISkills {
  frontend: string[];
  backend: string[];
  tools: string[];
  [key: string]: string[];
}

const skills: ISkills = {
  frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'TypeScript',
    'Bootstrap',
    'React Testing Library',
    'RWD',
    'REST API',
  ],
  backend: ['Python', 'Django', 'PostgreSQL'],
  tools: ['Figma', 'Visual Studio Code', 'Trello', 'Git', 'Github'],
  'learning or planning to learn soon': [
    'TypeScript',
    'Docker',
    'NextJS',
    'GraphQL',
  ],
};

export default skills;
