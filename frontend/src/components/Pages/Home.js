import {Box, CloseButton, Flex, useToast} from '@chakra-ui/core';
import React, {useContext, useEffect, useState} from 'react';
import MarkdownInput from '../MarkdownInput';
import MarkdownPreview from '../MarkdownPreview';
import Navbar from '../Navbar';
import NoteContext from '../../context/Note/noteContext';
import SmallPreview from '../SmallPreview';

const Home = () => {
  const toast = useToast();
  const noteContext = useContext(NoteContext);
  const {note, error} = noteContext;

  const [markdown, setMarkdown] = useState('');
  const [noteName, setNoteName] = useState('Dummy Note');
  const [smallPreview, SetSmallPreview] = useState(false);

  useEffect(() => {
    // for case when user came from note viewing mode, note is still in state,
    if (note !== null) {
      noteContext.clearNote();
    }
    if (error !== null) {
      toast({
        description: error.msg,
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
      });
    }
    // eslint-disable-next-line
  }, [error]);

  const onSaveButtonClick = () => {
    if (markdown === '') {
      toast({
        description: 'Oh noe, looks like you have nothing to save',
        status: 'warning',
        duration: 5000,
        position: 'bottom-right',
      });
      return;
    }
    if (note === null) {
      noteContext.saveNote({markdown, noteName});
      toast({
        description: 'Saving note, continue typing.',
        status: 'success',
        duration: 4000,
        position: 'bottom-right',
      });
    }
    if (note !== null) {
      noteContext.updateNote({markdown, noteName}, note.data._id);
      toast({
        description: 'Updating note, continue typing.',
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
        <SmallPreview
          markdown={markdown}
          smallPreview={smallPreview}
          SetSmallPreview={SetSmallPreview}
        />
        <MarkdownInput
          setMarkdown={setMarkdown}
          SetSmallPreview={SetSmallPreview}
        />
        <Box display={{base: 'none', md: 'none', lg: 'block'}} flex='1' ml={3}>
          <MarkdownPreview markdown={markdown} />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
