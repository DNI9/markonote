import {Box, Flex} from '@chakra-ui/core';
import React from 'react';
import '../../node_modules/highlight.js/styles/github.css';
import '../Main.scss';
import MarkdownInput from './MarkdownInput';
import MarkdownPreview from './MarkdownPreview';
import Navbar from './Navbar';

export default function App() {
  let [markdown, setMarkdown] = React.useState('');

  return (
    <Box minH='100vh'>
      <Navbar />
      <Flex p={3} minH='90vh'>
        <MarkdownInput setMarkdown={setMarkdown} />
        <MarkdownPreview markdown={markdown} />
      </Flex>
    </Box>
  );
}
