import {Box, Flex, Spinner, useToast} from '@chakra-ui/core';
import React, {Suspense, useContext, useEffect, useState} from 'react';
import MarkdownInput from '../components/MarkdownInput';
import MarkdownPreview from '../components/MarkdownPreview';
import Navbar from '../components/Navbar';
import NoteContext from '../context/Note/noteContext';

const SmallPreview = React.lazy(() => import('../components/SmallPreview'));

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
    if (markdown.trim() === '') {
      toast({
        description: 'Nothing to save, please write something.',
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
      <Navbar
        setMarkdown={setMarkdown}
        onSaveButtonClick={onSaveButtonClick}
        setNoteName={setNoteName}
      />
      <Flex p={3} minH='90vh'>
        <Suspense
          fallback={
            <Box className='abs-center'>
              <Spinner size='xl' />
            </Box>
          }>
          <SmallPreview
            setMarkdown={setMarkdown}
            markdown={markdown}
            smallPreview={smallPreview}
            SetSmallPreview={SetSmallPreview}
          />
        </Suspense>
        <MarkdownInput
          markdown={markdown}
          setMarkdown={setMarkdown}
          SetSmallPreview={SetSmallPreview}
        />
        <Box
          pos='relative'
          display={{base: 'none', md: 'none', lg: 'block'}}
          flex='1'
          ml={3}>
          <MarkdownPreview markdown={markdown} setMarkdown={setMarkdown} />
        </Box>
      </Flex>
    </>
  );
};

export default Home;
