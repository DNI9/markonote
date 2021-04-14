import {Box, Flex, Heading, Tag, Text} from '@chakra-ui/core';
import React from 'react';
import ParseMarkdown from '../utils/ParseMarkdown';

const MarkdownPreview = ({markdown, setMarkdown}) => {
  return markdown === '' ? (
    <Flex
      justify='center'
      align='center'
      px={15}
      flexDirection='column'
      className='abs-center'
      w='full'>
      <Heading as='h2' size='xl' color='gray.600'>
        Nothing to preview
      </Heading>
      <Text textAlign='center' color='gray.500' fontSize='md'>
        Write something like <code># Hello</code> or, click the below button to
        load an example.
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
