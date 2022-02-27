import {Box, Spinner} from '@chakra-ui/core';
import React from 'react';

export default function FallbackSpinner() {
  return (
    <Box className='abs-center'>
      <Spinner size='xl' />
    </Box>
  );
}
