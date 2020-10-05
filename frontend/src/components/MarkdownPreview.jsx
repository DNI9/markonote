import {Box} from '@chakra-ui/core';
import React from 'react';
import ParseMarkdown from '../utils/ParseMarkdown';

const MarkdownPreview = ({markdown}) => {
  return (
    <Box
      dangerouslySetInnerHTML={{__html: ParseMarkdown(markdown)}}
      border='1px solid'
      borderColor='gray.300'
      minH='full'
      rounded='5px'
      p='0.5rem 0.8rem'></Box>
  );
};

export default MarkdownPreview;
