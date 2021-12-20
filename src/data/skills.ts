export interface ISkills {
  'front-end': string[];
  'back-end': string[];
  tools: string[];
  [key: string]: string[];
}

const skills: ISkills = {
  'front-end': [
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
  'back-end': ['Python', 'Django', 'PostgreSQL'],
  tools: ['Figma', 'Visual Studio Code', 'Trello', 'Git', 'Github'],
  'learning or planning to learn soon': [
    'TypeScript',
    'Docker',
    'NextJS',
    'GraphQL',
  ],
};

export default skills;
