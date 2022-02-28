import {Box, useToast} from '@chakra-ui/core';
import React, {useContext, useEffect, useState} from 'react';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import Navbar from '../components/Navbar';
import NoteContext from '../context/Note/noteContext';
import {defaultToastOptions} from '../utils/constants';
import ParseMarkdown from '../utils/ParseMarkdown';

const defaultMarkdown = `# Hello world

To learn more about markdown syntax, visit this [link](https://www.markdownguide.org/basic-syntax/)
`;

const Home = () => {
  const toast = useToast();
  const noteContext = useContext(NoteContext);
  const {note, error} = noteContext;
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [noteName, setNoteName] = useState('Dummy Note');
  useKeyboardShortcut(['Alt', 'S'], () => onSaveButtonClick(), {
    overrideSystem: false,
    ignoreInputFields: false,
    repeatOnHold: false,
  });

  useEffect(() => {
    // for case when user came from note viewing mode, note is still in state,
    if (note !== null) noteContext.clearNote();
  }, []);

  useEffect(() => {
    if (error !== null) {
      toast({
        ...defaultToastOptions,
        description: error.msg,
        status: 'error',
      });
    }
  }, [error]);

  const onSaveButtonClick = () => {
    if (markdown.trim() === '') {
      toast({
        ...defaultToastOptions,
        description: 'Nothing to save, please write something.',
        status: 'warning',
      });
      return;
    }
    if (note === null) {
      noteContext.saveNote({markdown, noteName});
      toast({
        ...defaultToastOptions,
        description: 'Saving note, continue typing.',
      });
    }
    if (note !== null) {
      noteContext.updateNote({markdown, noteName}, note.data._id);
      toast({
        ...defaultToastOptions,
        description: 'Updating note, continue typing.',
      });
    }
  };

  const handleEditorChange = ({text}) => {
    const newValue = text.replace(/\d/g, '');
    setMarkdown(newValue);
  };

  return (
    <>
      <Navbar
        setMarkdown={setMarkdown}
        onSaveButtonClick={onSaveButtonClick}
        setNoteName={setNoteName}
      />
      <Box h='90vh' p={3}>
        <Editor
          id='mn'
          value={markdown}
          style={{height: '100%'}}
          onChange={handleEditorChange}
          renderHTML={text => ParseMarkdown(text)}
          placeholder='Write something here and hit Alt+S to save'
        />
      </Box>
    </>
  );
};

export default Home;
