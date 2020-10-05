import {Box, useToast} from '@chakra-ui/core';
import React, {useContext, useEffect} from 'react';
import '../../node_modules/highlight.js/styles/github.css';
import '../Main.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Note from './Pages/Note';
import NoteContext from '../context/Note/noteContext';

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
