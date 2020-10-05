import {Box} from '@chakra-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../node_modules/highlight.js/styles/github.css';
import '../Main.scss';
import Home from './Pages/Home';
import Note from './Pages/Note';

export default function App() {
  return (
    <Router>
      <Box minH='100vh'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={Note} />
        </Switch>
      </Box>
    </Router>
  );
}
