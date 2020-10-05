import {Box, Flex, Spinner} from '@chakra-ui/core';
import React, {useContext, useEffect} from 'react';
import MarkdownPreview from '../MarkdownPreview';
import Navbar from '../Navbar';
import NoteContext from '../../context/Note/noteContext';
import {useParams} from 'react-router-dom';

const Note = () => {
  const {id} = useParams();
  const noteContext = useContext(NoteContext);
  const {loading, note} = noteContext;

  useEffect(() => {
    noteContext.getNote(id);
  }, []);

  return (
    <>
      {loading && note === null ? (
        <Box className='abs-center'>
          <Spinner size='xl' />
        </Box>
      ) : (
        <>
          <Navbar publicMode noteName={note.data.noteName} />
          <Flex p={3} minH='90vh'>
            <Box flex='1' ml={3}>
              <MarkdownPreview markdown={note.data.markdown} />
            </Box>
          </Flex>
        </>
      )}
    </>
  );
};

export default Note;