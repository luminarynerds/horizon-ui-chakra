import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ELearning = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">E-Learning Overview</Text>
      <Text mt={2}>Manage your courses, lessons, and quizzes here.</Text>
    </Box>
  );
};

export const Courses = () => {
  return <Text>Courses Component</Text>;
};

export const Lessons = () => {
  return <Text>Lessons Component</Text>;
};

export const Quizzes = () => {
  return <Text>Quizzes Component</Text>;
};

export default ELearning;
