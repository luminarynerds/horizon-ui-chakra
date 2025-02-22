import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function InventoryList() {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Box p='20px' bg={useColorModeValue("white", "navy.700")} rounded='20px'>
      <Text color={textColor} fontSize='lg' fontWeight='bold'>
        Inventory List
      </Text>
      {/* Inventory items will go here */}
    </Box>
  );
}
