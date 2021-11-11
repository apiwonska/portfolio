import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import ProjectCard from '../shared/ProjectCard';
import { TProject } from '../data/projects';

const project: TProject = {
  projectName: 'Fake Project Name',
  id: 'fake-project-name',
  summary: 'Fake Project summary',
  links: {
    live: 'https://fake-project.com',
    github: 'https://github.com/apiwonska/FakeProject',
  },
  technologies: ['HTML', 'CSS'],
  cardImg: 'card_fakeProject1.png',
  images: ['fakeProject1.png', 'fakeProject2.png'],
};

jest.mock('shared/ProjectCard/Img', () => ({ cardImg }) => (
  <img src={cardImg} alt="" />
));
jest.mock('utilities/useIntersection', () => () => ({ current: null }));

const setOpenProjectCardId = jest.fn();

const WrappedProjectCard = ({ isOpen }) => (
  <MemoryRouter>
    <ProjectCard
      project={project}
      ind={1}
      isOpen={isOpen}
      setOpenProjectCardId={setOpenProjectCardId}
    />
  </MemoryRouter>
);

describe('ProjectCard', () => {
  // changing the button state is tested in ProjectsPage test file

  it('render a button to open / close the card, button has appropriate aria labels', () => {
    const { rerender } = render(<WrappedProjectCard isOpen={false} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Read about the project'
    );
    rerender(<WrappedProjectCard isOpen />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close');
  });

  it('project information are not visible when isOpen is set to false only header is visible', () => {
    const cssFile = fs.readFileSync(
      path.resolve(__dirname, '../shared/ProjectCard/ProjectCard.module.css'),
      'utf8'
    );
    const { container } = render(<WrappedProjectCard isOpen={false} />);
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = cssFile;
    container.append(style);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Fake Project Name'
    );
    // When styling with css we need extra steps to test visibility
    // By default css is not loaded in tests and we need to do it manually
    expect(screen.getByTestId('project-card-summary')).not.toBeVisible();
  });

  it('show project information afer clicking button', () => {
    render(<WrappedProjectCard isOpen />);
    const links = screen.getByLabelText(/links/i);
    const tags = screen.getByLabelText(/technologies/i);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Fake Project Name'
    );
    expect(screen.getByTestId('project-card-summary')).toHaveTextContent(
      'Fake Project summary'
    );
    expect(within(links).getAllByRole('link')).toHaveLength(2);
    expect(within(links).getAllByRole('link')[0]).toHaveTextContent(/live/i);
    expect(within(links).getAllByRole('link')[0]).toHaveAttribute(
      'href',
      'https://fake-project.com'
    );
    expect(within(links).getAllByRole('link')[1]).toHaveTextContent(/github/i);
    expect(within(links).getAllByRole('link')[1]).toHaveAttribute(
      'href',
      'https://github.com/apiwonska/FakeProject'
    );
    expect(within(tags).getAllByRole('listitem')).toHaveLength(2);
    expect(within(tags).getAllByRole('listitem')[1]).toHaveTextContent(/css/i);
  });
});
