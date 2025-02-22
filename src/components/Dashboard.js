import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Dashboard Overview</Text>
      <Text mt={2}>Welcome to your balloon artist platform!</Text>
    </Box>
  );
};

export default Dashboard;