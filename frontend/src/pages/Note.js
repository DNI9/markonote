import {Box, Spinner} from '@chakra-ui/core';
import React, {useContext, useEffect} from 'react';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import {Redirect, useParams} from 'react-router-dom';
import Navbar from '../components/Navbar';
import NoteContext from '../context/Note/noteContext';
import ParseMarkdown from '../utils/ParseMarkdown';

const Note = () => {
  const {id} = useParams();
  const noteContext = useContext(NoteContext);
  const {loading, note} = noteContext;

  useEffect(() => {
    noteContext.getNote(id);
    // eslint-disable-next-line
  }, []);

  const RenderMain = () => {
    if (!note) return <Redirect to='/' />;

    return (
      <>
        <Navbar publicMode noteName={note.data.noteName} />
        <Box h='90vh' p={3}>
          <Editor
            id='mn'
            readOnly
            value={note.data.markdown}
            style={{height: '100%'}}
            renderHTML={text => ParseMarkdown(text)}
            view={{md: false, menu: false}}
          />
        </Box>
      </>
    );
  };

  return (
    <>
      {loading && !note ? (
        <Box className='abs-center'>
          <Spinner size='xl' />
        </Box>
      ) : (
        <RenderMain />
      )}
    </>
  );
};

export default Note;
