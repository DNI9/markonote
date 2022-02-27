import {Box, Spinner} from '@chakra-ui/core';
import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../node_modules/highlight.js/styles/github.css';
import '../main.css';

const Home = React.lazy(() => import('./Pages/Home'));
const Note = React.lazy(() => import('./Pages/Note'));

export default function App() {
  const LazyRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props => (
        <Suspense
          fallback={
            <Box className='abs-center'>
              <Spinner size='xl' />
            </Box>
          }>
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
