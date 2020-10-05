import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Icon,
  Tooltip,
  useToast,
} from '@chakra-ui/core';
import React, {useContext} from 'react';
import CopyToClipboard from '../utils/CopyToClipboard';
import NoteContext from '../context/Note/noteContext';
import {useHistory} from 'react-router-dom';
import {GoNote} from 'react-icons/go';

const Navbar = ({onSaveButtonClick, setNoteName, publicMode, noteName}) => {
  let history = useHistory();
  const toast = useToast();
  const noteContext = useContext(NoteContext);
  const {note} = noteContext;
  function onCopyBtnClick() {
    if (note !== null) {
      CopyToClipboard(note.data._id);
      toast({
        description: 'Copied Note URL to clipboard',
        status: 'success',
        duration: 5000,
        position: 'bottom-right',
      });
    } else {
      toast({
        description: 'oho, Save note first then try to copy',
        status: 'error',
        duration: 5000,
        position: 'bottom-right',
      });
    }
  }

  return (
    <Flex
      align='center'
      justify='start'
      h='3.5rem'
      minW='100vw'
      p='0.5rem 1rem'
      shadow='lg'>
      <Box as={GoNote} size='24px' mr={1} />
      <Heading
        display={{base: 'none', md: 'block'}}
        pb={1}
        size='md'
        color='gray.800'
        letterSpacing='1px'>
        Markdown Note
      </Heading>

      <Flex align='center' justify='start' ml='auto'>
        <Tooltip
          label={publicMode ? '' : 'Click to edit note name'}
          placement='bottom'>
          <Box mr={3}>
            <Editable
              isDisabled={publicMode}
              onChange={value => setNoteName(value)}
              defaultValue={noteName ? noteName : 'Dummy Note'}>
              <EditablePreview />
              <EditableInput border='none' p={1} />
            </Editable>
          </Box>
        </Tooltip>
        {!publicMode && (
          <Tooltip label='Save/Update Note' placement='bottom'>
            <Icon
              onClick={onSaveButtonClick}
              aria-label='Save note'
              cursor='pointer'
              name='check'
              size='20px'
              mr={2}
            />
          </Tooltip>
        )}
        <Tooltip label='Copy URL' placement='bottom'>
          <Icon
            onClick={onCopyBtnClick}
            cursor='pointer'
            name='copy'
            size='20px'
            mr={2}
          />
        </Tooltip>
        {publicMode && (
          <Tooltip label='New Note' placement='bottom'>
            <Icon
              onClick={() => {
                history.push('/');
              }}
              cursor='pointer'
              name='add'
              size='18px'
            />
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
