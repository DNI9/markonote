import {ThemeProvider} from '@chakra-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoteState from './context/Note/NoteState';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NoteState>
        <App />
      </NoteState>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
