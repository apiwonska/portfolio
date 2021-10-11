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
    'Bootstrap4',
    'React Testing Library',
    'RWD',
    'REST API',
  ],
  backend: ['Python', 'Django', 'PostgreSql'],
  tools: ['Figma', 'Visual Studio Code', 'Trello', 'Git', 'Github'],
};

export default skills;
