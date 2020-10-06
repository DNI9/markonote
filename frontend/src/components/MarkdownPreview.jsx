import {Box, Flex, Heading, Tag, Text} from '@chakra-ui/core';
import React from 'react';
import ParseMarkdown from '../utils/ParseMarkdown';

const MarkdownPreview = ({markdown, setMarkdown}) => {
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
      <Text textAlign='center' color='gray.500' fontSize='md'>
        Write something like <code># Hello</code> or if you don't know how to
        write in markdown, then google is your friend. Just Kidding, click the
        below button to load an example.
      </Text>
      <Tag
        mt={4}
        variantColor='blue'
        cursor='pointer'
        rounded='full'
        onClick={() => setMarkdown('# Hello')}>
        Demo Note
      </Tag>
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
