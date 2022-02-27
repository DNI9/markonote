import {Box, Flex, Spinner} from '@chakra-ui/core';
import React, {useContext, useEffect} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import MarkdownPreview from '../components/MarkdownPreview';
import Navbar from '../components/Navbar';
import NoteContext from '../context/Note/noteContext';

const Note = () => {
  const {id} = useParams();
  const noteContext = useContext(NoteContext);
  const {loading, note} = noteContext;

  useEffect(() => {
    noteContext.getNote(id);
    // eslint-disable-next-line
  }, []);

  const RenderMain = () => {
    if (note !== null && note.code === 'GET_NOTE') {
      return (
        <>
          <Navbar publicMode noteName={note.data.noteName} />
          <Flex p={3} minH='90vh'>
            <Box flex='1' ml={3}>
              <MarkdownPreview markdown={note.data.markdown} />
            </Box>
          </Flex>
        </>
      );
    }
    return <Redirect to='/' />;
  };

  return (
    <>
      {loading && note === null ? (
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
