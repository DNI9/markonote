import {Box, IconButton, Textarea} from '@chakra-ui/core';
import React from 'react';

const MarkdownInput = ({setMarkdown, markdown, SetSmallPreview}) => {
  const handleInputChange = e => setMarkdown(e.target.value);

  return (
    <Box minW='50vw' flex='1' pos='relative'>
      <Textarea
        autoFocus
        className='textarea_input'
        resize='none'
        borderColor='gray.300'
        value={markdown}
        onChange={handleInputChange}
        h='100%'
        placeholder='Start writing with Markdown'
      />
      <IconButton
        onClick={() => SetSmallPreview(true)}
        display={{base: 'flex', lg: 'none'}}
        zIndex='1'
        cursor='pointer'
        pos='absolute'
        bottom='0.8rem'
        right='1rem'
        rounded='full'
        height='3rem'
        width='3rem'
        border='none'
        variantColor='blue'
        aria-label='Preview'
        size='lg'
        icon='view'
      />
    </Box>
  );
};

export default MarkdownInput;
