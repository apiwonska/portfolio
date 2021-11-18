import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '__mocks__/matchMedia';
import App from '../App';

jest.mock('pages/HomePage', () => () => <>Home Page</>);
jest.mock('pages/ProjectsPage', () => () => <>Projects Page</>);
jest.mock('pages/ProjectPage', () => () => <>Project Page</>);
jest.mock('shared/NotFound', () => () => <>Not Found</>);
jest.mock('shared/PageLoader', () => () => <>Loading Page</>);

window.scrollTo = jest.fn();

describe('App', () => {
  it('render Home Page for a default route', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(await screen.findByText(/home/i)).toBeInTheDocument();

    expect(screen.getByText(/home/i).closest('body')).toMatchInlineSnapshot(`
      <body>
        <div>
          Home Page
          <div
            class="cursor"
          />
        </div>
      </body>
    `);
  });

  it('render Projects Page for "/projects" route', async () => {
    const history = createMemoryHistory();
    history.push('/projects');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(await screen.findByText(/projects/i)).toBeInTheDocument();

    expect(screen.getByText(/projects/i).closest('body'))
      .toMatchInlineSnapshot(`
      <body>
        <div>
          Projects Page
          <div
            class="cursor"
          />
        </div>
      </body>
    `);
  });

  it('render Project Page for "/projects/:id" route', async () => {
    const history = createMemoryHistory();
    history.push('/projects/project-name');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(await screen.findByText(/project/i)).toBeInTheDocument();

    expect(screen.getByText(/project/i).closest('body')).toMatchInlineSnapshot(`
      <body>
        <div>
          Project Page
          <div
            class="cursor"
          />
        </div>
      </body>
    `);
  });

  it('render Not Found for an unknown route', () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    expect(screen.getByText(/not found/i).closest('body'))
      .toMatchInlineSnapshot(`
      <body>
        <div>
          Not Found
          <div
            class="cursor"
          />
        </div>
      </body>
    `);
  });
});
