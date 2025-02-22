import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PricingTable() {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box p='20px' bg={useColorModeValue("white", "navy.700")} rounded='20px'>
      <Text color={textColor} fontSize='lg' fontWeight='bold'>
        Pricing Table
      </Text>
      {/* Pricing details will go here */}
    </Box>
  );
}
