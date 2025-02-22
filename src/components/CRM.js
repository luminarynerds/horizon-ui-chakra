import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Customers = () => <div>Customers Content</div>;
export const Contacts = () => <div>Contacts Content</div>;
export const Deals = () => <div>Deals Content</div>;

const CRM = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">CRM Overview</Text>
      <Text mt={2}>Manage your customer relationships here.</Text>
    </Box>
  );
};

export default CRM;
