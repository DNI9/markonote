import {Box, Textarea} from '@chakra-ui/core';
import React from 'react';

const MarkdownInput = ({setMarkdown}) => {
  const handleInputChange = e => {
    setMarkdown(e.target.value);
  };
  return (
    <Box minW='50vw' flex='1'>
      <Textarea
        className='textarea_input'
        resize='none'
        borderColor='gray.300'
        // value={markdown}
        onChange={handleInputChange}
        h='100%'
        placeholder='Start writing with Markdown'
      />
    </Box>
  );
};

export default MarkdownInput;
