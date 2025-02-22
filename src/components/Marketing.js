import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Marketing = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">Marketing Overview</Text>
      <Text mt={2}>Manage your marketing campaigns here.</Text>
    </Box>
  );
};

export const Campaigns = () => {
  return <Text>Campaigns Component</Text>;
};

export const MarketingAnalytics = () => {
  return <Text>Marketing Analytics Component</Text>;
};

export default Marketing;
