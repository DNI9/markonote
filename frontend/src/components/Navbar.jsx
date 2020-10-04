import {Box, Flex, Heading, Icon, Tooltip} from '@chakra-ui/core';
import React, {useContext} from 'react';
import NoteContext from '../context/Note/noteContext';

const Navbar = () => {
  const noteContext = useContext(NoteContext);
  return (
    <Flex
      align='center'
      justify='start'
      h='3.5rem'
      minW='100vw'
      p='0.5rem 1rem'
      shadow='lg'>
      <Icon name='chevron-right' size='24px' />
      <Heading pb={1} size='md' color='gray.800' letterSpacing='1px'>
        Markdown Note
      </Heading>

      <Box ml='auto'>
        <Tooltip label='Save Note' placement='bottom'>
          <Icon
            onClick={() => noteContext.saveNote()}
            aria-label='Save note'
            cursor='pointer'
            name='check'
            size='20px'
            mr={2}
          />
        </Tooltip>
        <Tooltip label='Copy URL' placement='bottom'>
          <Icon cursor='pointer' name='copy' size='20px' />
        </Tooltip>
      </Box>
    </Flex>
  );
};

export default Navbar;
