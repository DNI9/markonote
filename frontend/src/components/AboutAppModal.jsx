import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/core';
import React from 'react';
import {GoNote} from 'react-icons/go';
import {SiGithub} from 'react-icons/si';

const AboutAppModal = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={5}>
        <ModalHeader>About this App</ModalHeader>
        <ModalBody>
          <Box as={GoNote} size='48px' />

          <Heading as='h2' size='lg'>
            Mark Note
          </Heading>
          <Text fontSize='md'>
            A note taking app I made while in pandemic to write and share notes
            with friends.
          </Text>
          <Box mt={3}>
            <Box
              onClick={() => window.open('https://github.com/dni9', '_blank')}
              as={SiGithub}
              color='gray.800'
              size='24px'
              cursor='pointer'
            />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default AboutAppModal;
