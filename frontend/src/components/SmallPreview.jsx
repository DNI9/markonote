import {Box, CloseButton} from '@chakra-ui/core';
import React from 'react';
import MarkdownPreview from './MarkdownPreview';

const SmallPreview = ({
  markdown,
  smallPreview,
  SetSmallPreview,
  setMarkdown,
}) => {
  return (
    <Box
      display={smallPreview ? 'block' : 'none'}
      pos='absolute'
      top='0'
      left='0'
      w='100vw'
      h='100vh'
      zIndex='5'
      bg='white'>
      <Box pos='fixed' right='1rem' top='1rem'>
        <CloseButton
          border='none'
          cursor='pointer'
          onClick={() => SetSmallPreview(false)}
        />
      </Box>
      <MarkdownPreview setMarkdown={setMarkdown} markdown={markdown} />
    </Box>
  );
};

export default SmallPreview;
