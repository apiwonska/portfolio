import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLoader from 'shared/PageLoader';
import NotFound from 'shared/NotFound';
import ScrollToTop from 'shared/ScrollToTop';
import 'App.css';

const HomePage = lazy(() => import('pages/HomePage'));
const ProjectsPage = lazy(() => import('pages/ProjectsPage'));
const ProjectPage = lazy(() => import('pages/ProjectPage'));

const App: React.FC = () => (
  <>
    <ScrollToTop>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/projects/:projectId" component={ProjectPage} exact />
          <Route path="/projects" component={ProjectsPage} exact />
          <Route path="/" component={HomePage} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </ScrollToTop>
  </>
);
export default App;
