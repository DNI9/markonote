import {Box} from '@chakra-ui/core';
import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/highlight.js/styles/github.css';
import FallbackSpinner from './components/FallbackSpinner';
import './main.css';

const Home = React.lazy(() => import('./pages/Home'));
const Note = React.lazy(() => import('./pages/Note'));

export default function App() {
  const LazyRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props => (
        <Suspense fallback={<FallbackSpinner />}>
          <Component {...props} />
        </Suspense>
      )}
    />
  );
  return (
    <Router>
      <Box minH='100vh'>
        <Switch>
          <LazyRoute exact path='/' component={Home} />
          <LazyRoute exact path='/:id' component={Note} />
        </Switch>
      </Box>
    </Router>
  );
}
