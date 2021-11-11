import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReactRouter from 'react-router';
import ProjectPage from '../pages/ProjectPage';

jest.mock('../data/projects.ts', () => [
  {
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
  },
]);

jest.mock('../sections/Project/Img', () => ({ image }) => (
  <img src={image} alt="" />
));

const WrappedProjectPage: React.FC = () => (
  <MemoryRouter>
    <ProjectPage />
  </MemoryRouter>
);

describe('ProjectPage', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('render component correctly for a valid route', () => {
    // This was the only way it worked to mock useParams
    jest
      .spyOn(ReactRouter, 'useParams')
      .mockImplementationOnce(() => ({ projectId: 'fake-project-name' }));

    render(<WrappedProjectPage />);
    const links = screen.getByLabelText(/links/i);
    const tags = screen.getByLabelText(/technologies/i);

    expect(document.title).toEqual(
      'Anna Piwonska | Projects | Fake Project Name'
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Anna Piwonska, Front‑End Developer'
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Fake Project Name'
    );
    expect(
      within(screen.getByRole('banner')).getByRole('link')
    ).toHaveAttribute('href', '/');
    expect(screen.getByTestId('project-summary')).toHaveTextContent(
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
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('renders page Not Found for invalid route', () => {
    jest
      .spyOn(ReactRouter, 'useParams')
      .mockImplementationOnce(() => ({ projectId: 'invalid-path' }));
    render(<WrappedProjectPage />);

    expect(document.title).toEqual('Anna Piwonska | Page Not Found');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '404 Error. Page Not Found'
    );
    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
  });
});
