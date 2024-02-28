import React, { useState } from "react";
import { Box, Flex, Heading, Input, Text, VStack, IconButton, useDisclosure, Collapse, Button } from "@chakra-ui/react";
import { FaPlus, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Note = ({ title, content, onToggle, isOpen }) => (
  <Box p={4} boxShadow="md" borderRadius="md" bg="white" mb={4} onClick={onToggle} cursor="pointer">
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <IconButton aria-label="Expand note" icon={isOpen ? <FaChevronUp /> : <FaChevronDown />} variant="ghost" />
    </Flex>
    <Collapse in={isOpen}>
      <Text mt={4}>{content}</Text>
    </Collapse>
  </Box>
);

const Index = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "First Note", content: "This is the first note" },
    { id: 2, title: "Second Note", content: "This is the second note" },
    // ... more notes
  ]);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack spacing={8} p={8}>
      <Heading as="h1" size="2xl" color="blue.600">
        Notes
      </Heading>
      <Flex w="100%" pb={4}>
        <Input placeholder="Search notes" variant="filled" mr={2} />
        <IconButton aria-label="Search notes" icon={<FaSearch />} colorScheme="blue" />
      </Flex>
      <VStack spacing={4} align="stretch" w="100%">
        {notes.map((note) => (
          <Note key={note.id} title={note.title} content={note.content} onToggle={() => onToggle()} isOpen={isOpen} />
        ))}
      </VStack>
      <Button leftIcon={<FaPlus />} colorScheme="blue" size="lg">
        Add New Note
      </Button>
    </VStack>
  );
};

export default Index;
