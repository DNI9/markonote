import {Box, Flex, useToast} from '@chakra-ui/core';
import React, {useContext, useEffect, useState} from 'react';
import MarkdownInput from '../MarkdownInput';
import MarkdownPreview from '../MarkdownPreview';
import Navbar from '../Navbar';
import NoteContext from '../../context/Note/noteContext';

const Home = () => {
  const toast = useToast();
  const noteContext = useContext(NoteContext);
  const {note, error} = noteContext;

  const [markdown, setMarkdown] = useState('');
  const [noteName, setNoteName] = useState('Dummy Note');
  useEffect(() => {
    if (error !== null) {
      toast({
        description: error.msg,
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
      });
    }
  }, [error]);

  const onSaveButtonClick = () => {
    if (markdown === '') {
      toast({
        description: 'Oh noe, looks like you have nothing to type',
        status: 'warning',
        duration: 5000,
        position: 'bottom-right',
      });
      return;
    }
    if (note === null) {
      noteContext.saveNote({markdown, noteName});
      toast({
        description: 'Saved note, continue typing!',
        status: 'success',
        duration: 4000,
        position: 'bottom-right',
      });
    }
    if (note !== null) {
      noteContext.updateNote({markdown, noteName}, note.data._id);
      toast({
        description: 'Updated note, Nice work!',
        status: 'success',
        duration: 4000,
        position: 'bottom-right',
      });
    }
  };

  return (
    <>
      <Navbar onSaveButtonClick={onSaveButtonClick} setNoteName={setNoteName} />
      <Flex p={3} minH='90vh'>
        <MarkdownInput setMarkdown={setMarkdown} />
        <Box display={{base: 'none', md: 'none', lg: 'block'}} flex='1' ml={3}>
          <MarkdownPreview markdown={markdown} />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
