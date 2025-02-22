import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const AITools = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">AI Tools Overview</Text>
      <Text mt={2}>Use AI-powered tools for your tasks.</Text>
    </Box>
  );
};

export const ChatAssistant = () => {
  return <Text>Chat Assistant Component</Text>;
};

export const ImageGenerator = () => {
  return <Text>Image Generator Component</Text>;
};

export default AITools;
