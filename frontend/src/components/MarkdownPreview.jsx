import {Box} from '@chakra-ui/core';
import React from 'react';
import MarkdownIt from 'markdown-it';
import mhljs from 'markdown-it-highlightjs';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  langPrefix: 'language-',
  typographer: true,
}).use(mhljs);

const MarkdownPreview = ({markdown}) => {
  const MdToHTML = markdown => {
    const parsedHTML = md.render(markdown);
    console.log(parsedHTML);
    return parsedHTML;
  };

  return (
    <Box display={{base: 'none', md: 'none', lg: 'block'}} flex='1' ml={3}>
      <Box
        maxW='50vw'
        dangerouslySetInnerHTML={{__html: MdToHTML(markdown)}}
        border='1px solid'
        borderColor='gray.300'
        minH='full'
        rounded='5px'
        p='0.5rem 0.8rem'></Box>
    </Box>
  );
};

export default MarkdownPreview;
