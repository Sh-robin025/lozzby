import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Layout = React.lazy(() => import('./components/Layout'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const AppRouter: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
