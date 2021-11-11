import { render, screen, waitFor, within } from '@testing-library/react';
import user from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectsPage from '../pages/ProjectsPage';

const WrappedProjectsPage = () => (
  <Router>
    <ProjectsPage />
  </Router>
);

describe('ProjectsPage', () => {
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

  it('display appropriate document title', () => {
    render(<WrappedProjectsPage />);
    expect(document.title).toEqual('Anna Piwonska | Projects');
  });

  it('renders headers', () => {
    render(<WrappedProjectsPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Anna Piwonska, Front‑End Developer'
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Projects'
    );
  });

  it('render project cards', () => {
    render(<WrappedProjectsPage />);
    const projectCards = screen.getAllByTestId('project-card');

    expect(projectCards.length).toBeGreaterThan(0);
  });

  it('toggle the card state with a button click', async () => {
    render(<WrappedProjectsPage />);
    const projectCard = screen.getAllByTestId('project-card')[0];
    const btn = within(projectCard).getByTestId('project-card-toggle-button');

    expect(btn).toHaveAttribute('aria-label', 'Read about the project');
    user.click(btn);
    await waitFor(() => {
      expect(btn).toHaveAttribute('aria-label', 'Close');
    });
    user.click(btn);
    await waitFor(() => {
      expect(btn).toHaveAttribute('aria-label', 'Read about the project');
    });
  });
});
