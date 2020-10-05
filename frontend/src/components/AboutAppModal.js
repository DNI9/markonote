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
import {SiTelegram, SiGithub} from 'react-icons/si';

const AboutAppModal = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>About this App</ModalHeader>
        <ModalBody>
          <Box as={GoNote} size='48px' />

          <Heading as='h2' size='lg'>
            Guunobindo Note
          </Heading>
          <Text fontSize='md'>
            While taking notes in online class, the idea came to mind that a app
            allows user to create and share notes with markdown. So, this is the
            result. Sill working on adding bugs,features.
          </Text>
          <Box mt={3}>
            <Box
              onClick={() => window.open('https://t.me/SRnine', '_blank')}
              as={SiTelegram}
              color='blue.400'
              size='24px'
              mr={2}
              cursor='pointer'
            />
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
            K
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default AboutAppModal;
