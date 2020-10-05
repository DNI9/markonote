import {Box, Flex, Heading} from '@chakra-ui/core';
import React from 'react';
import ParseMarkdown from '../utils/ParseMarkdown';

const MarkdownPreview = ({markdown}) => {
  return markdown === '' ? (
    <Flex
      justify='center'
      align='center'
      flexDirection='column'
      className='abs-center'>
      <img
        src='https://media.tenor.com/images/c9a5b1e510761052506c7c227410ac96/tenor.gif'
        alt=''
      />
      <Heading as='h2' size='xl' color='gray.600'>
        Full Emptybaazi
      </Heading>
    </Flex>
  ) : (
    <Box
      dangerouslySetInnerHTML={{__html: ParseMarkdown(markdown)}}
      border='1px solid'
      borderColor='gray.300'
      minH='full'
      rounded='5px'
      p='0.5rem 0.8rem'
    />
  );
};

export default MarkdownPreview;
