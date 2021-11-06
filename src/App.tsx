import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ProjectsPage from 'pages/ProjectsPage';
import ProjectPage from 'pages/ProjectPage';
import NotFound from 'shared/NotFound';
import ScrollToTop from 'shared/ScrollToTop';
import Cursor from 'shared/Cursor';
import 'App.css';

const App: React.FC = () => (
  <>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/projects/:projectId" component={ProjectPage} exact />
          <Route path="/projects" component={ProjectsPage} exact />
          <Route path="/" component={HomePage} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
    <Cursor />
  </>
);
export default App;
