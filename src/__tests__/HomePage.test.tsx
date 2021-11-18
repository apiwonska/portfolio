import '../__mocks__/matchMedia';
import { render, screen, within } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const WrappedHomePage = () => (
  <Router>
    <HomePage />
  </Router>
);

const originalIntersectionObserver = window.IntersectionObserver;

describe('HomePage', () => {
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

  afterAll(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });

  it('render all sections', () => {
    render(<WrappedHomePage />);
    const headingsLevel2 = screen.getAllByRole('heading', { level: 2 });

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Anna Piwonska, Front-end Developer'
    );
    expect(headingsLevel2).toHaveLength(4);
    expect(headingsLevel2[0]).toHaveTextContent('About');
    expect(headingsLevel2[1]).toHaveTextContent('Skills');
    expect(headingsLevel2[2]).toHaveTextContent('Projects');
    expect(headingsLevel2[3]).toHaveTextContent('Contact');
  });

  it('render navbar', () => {
    render(<WrappedHomePage />);
    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
    expect(within(navigation).getAllByRole('listitem')).toHaveLength(5);
    expect(within(navigation).getByText(/home/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/about/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/skills/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/projects/i)).toBeInTheDocument();
    expect(within(navigation).getByText(/contact/i)).toBeInTheDocument();
  });

  it('render project cards', () => {
    render(<WrappedHomePage />);
    const projectCards = screen.getAllByTestId('project-card');

    expect(projectCards.length).toBeGreaterThan(0);
  });

  it('render link to subpage with more projects', () => {
    render(<WrappedHomePage />);
    const link = screen.getByText(/see more projects/i);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('render contact form', () => {
    render(<WrappedHomePage />);
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });
});
