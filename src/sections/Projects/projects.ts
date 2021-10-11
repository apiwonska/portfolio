export type TLinks = {
  live: string;
  github: string;
};

export type TProject = {
  title: string;
  description: string;
  links: TLinks;
  technologies: string[];
};

const projects: TProject[] = [
  {
    title: 'First Project',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fuga perferendis blanditiis consectetur repellat id cupiditate quaerat eiusex alias quo nemo, sint molestiae in! Dicta error amet cum molestiae aliquam labore tenetur, perspiciatis quidem harum.',
    links: { live: 'https://www.google.com', github: 'https://www.google.com' },
    technologies: ['React', 'Redux', 'JS'],
  },
];
export default projects;
